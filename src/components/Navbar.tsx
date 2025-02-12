import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { useUser } from "../context/UserContext";
import logo from "../assets/logo.png";
import userIcon from "../assets/user_icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setIsOpen(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-black/20 px-6">
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
            <p className="text-white text-lg font-bold">{user.displayName}</p>
            <img
              src={user.photoURL || userIcon}
              alt="User Icon"
              className="h-12 w-12 rounded-full border-2 border-white cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        )}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
            <Dialog.Title className="text-xl font-bold mb-4">
              Войти в MetaQuest
            </Dialog.Title>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Войти через Google
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-gray-600 hover:text-black transition"
            >
              Отмена
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
