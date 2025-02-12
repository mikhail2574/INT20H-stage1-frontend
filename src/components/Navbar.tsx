import { useState } from "react";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { useUser } from "../context/UserContext";
import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const provider = new GoogleAuthProvider();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const { user } = useUser();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsOpen(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isRegister) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (avatar) {
          const avatarRef = ref(storage, `avatars/${userCredential.user.uid}`);
          await uploadBytes(avatarRef, avatar);
          const avatarUrl = await getDownloadURL(avatarRef);
          await updateProfile(userCredential.user, { photoURL: avatarUrl });
        }
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      setUser(userCredential.user);
      setIsOpen(false);
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-16 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-black/20 px-6"
      style={{ padding: "0 20px" }}
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <p className="text-white text-xl font-bold">MetaQuest</p>
      </div>
      <div className="flex items-center gap-6">
        {!user ? (
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-lg font-bold hover:underline"
          >
            Увійти
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <p className="text-white text-lg font-bold">
              {user.displayName || user.email}
            </p>
            <img
              src={user.photoURL || userIcon}
              alt="User Icon"
              className="h-12 w-12 rounded-full border-2 border-white cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
            <h2 className="text-xl font-bold mb-4">
              {isRegister ? "Реєстрація" : "Вхід"} в MetaQuest
            </h2>
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Пароль"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
              >
                {isRegister ? "Зареєструватись" : "Увійти"}
              </button>
            </form>
            <button
              onClick={handleLogin}
              className="mt-4 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Увійти через Google
            </button>
            <p
              className="mt-4 text-center text-gray-400 cursor-pointer hover:text-white"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister
                ? "Вже зареєстровані? Увійти"
                : "Немає акаунта? Зареєструватись"}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-gray-400 hover:text-white transition"
            >
              Назад
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
