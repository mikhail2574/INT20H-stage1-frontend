import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../lib/firebase";
import { useUser } from "../context/UserContext";

const QuestCreationModal = ({ onClose }) => {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [questType, setQuestType] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateQuest = async (e) => {
    e.preventDefault();
    if (!title || !description || !duration || !questType || !image) {
      alert("Будь ласка, заповніть всі поля та додайте фото!");
      return;
    }

    setLoading(true);
    try {
      if (!user) return;
      const imageRef = ref(storage, `quests/${user.uid}/${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "quests"), {
        title,
        description,
        duration,
        questType,
        imageUrl,
        createdBy: user.uid,
        createdAt: new Date(),
      });

      alert("Квест успішно створено!");
      onClose();
    } catch (error) {
      console.error("Помилка створення квесту:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Panel className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
      <Dialog.Title className="text-xl font-bold mb-4 text-center">
        Створення нового квесту
      </Dialog.Title>
      <form onSubmit={handleCreateQuest} className="space-y-4">
        <input
          type="text"
          placeholder="Назва"
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Опис"
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Час на проходження"
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <select
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          value={questType}
          onChange={(e) => setQuestType(e.target.value)}
          required
        >
          <option value="">Тип завдання</option>
          <option value="multiple-choice">Вибір правильного варіанту</option>
          <option value="open-answer">Відкрита відповідь</option>
          <option value="image-area">Обрати область на картинці</option>
        </select>
        <input
          type="file"
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          disabled={loading}
        >
          {loading ? "Створення..." : "Створити квест"}
        </button>
      </form>
      <button
        onClick={onClose}
        className="mt-4 w-full text-gray-400 hover:text-white transition"
      >
        Скасувати
      </button>
    </Dialog.Panel>
  );
};

export default QuestCreationModal;
