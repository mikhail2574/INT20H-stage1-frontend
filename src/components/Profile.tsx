import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../lib/firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const firestore = getFirestore();

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const generateInitialsAvatar = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "#4B5563";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "bold 80px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = "middle";
      const initials = `${firstName.charAt(0)}${lastName.charAt(
        0
      )}`.toUpperCase();
      context.fillText(initials, canvas.width / 2, canvas.height / 2);
      return canvas.toDataURL();
    }
    return null;
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        const file = acceptedFiles[0];
        setUploading(true);
        try {
          const fileRef = storageRef(
            storage,
            `avatars/${user?.uid}/${file.name}`
          );
          await uploadBytes(fileRef, file);
          const url = await getDownloadURL(fileRef);
          setAvatarUrl(url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
        setUploading(false);
      }
    },
    [user]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    let finalAvatarUrl = avatarUrl;
    if (!avatarUrl) {
      const initialsDataUrl = generateInitialsAvatar();
      if (initialsDataUrl) {
        // Convert data URL to blob and upload
        const response = await fetch(initialsDataUrl);
        const blob = await response.blob();
        const fileRef = storageRef(storage, `avatars/${user.uid}/initials.png`);
        await uploadBytes(fileRef, blob);
        finalAvatarUrl = await getDownloadURL(fileRef);
      }
    }

    try {
      // Use Firestore to save the data
      await setDoc(doc(firestore, "users", user.uid), {
        firstName,
        lastName,
        birthday: birthday ? birthday.toISOString() : null,
        avatarUrl: finalAvatarUrl,
        email: user.email,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birthday"
            >
              Birthday (optional):
            </label>
            <DatePicker
              id="birthday"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              selected={birthday}
              onChange={(date: Date) => setBirthday(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select date"
            />
          </div>
          <div
            {...getRootProps()}
            className={`border-4 border-dashed rounded-lg p-12 text-center cursor-pointer ${
              isDragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-50"
            } transition duration-300`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500">Drop the image here ...</p>
            ) : (
              <p className="text-gray-500">
                Drag & drop an image here, or click to select one
              </p>
            )}
            {uploading && <p className="text-gray-500">Uploading...</p>}
          </div>
          {avatarUrl && (
            <div className="flex justify-center">
              <img
                src={avatarUrl}
                alt="Avatar Preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
