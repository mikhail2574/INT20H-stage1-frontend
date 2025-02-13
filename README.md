MetaQuest — це онлайн-платформа, яка дозволяє користувачам створювати та проходити квести як онлайн, так і офлайн.
Платформа інтегрована з Firebase, має авторизацію, систему завдань та інтерфейс на React + TailwindCSS.

📌 Основні технології
Frontend: React, TypeScript, TailwindCSS, Headless UI
Backend: Firebase Firestore (база даних), Firebase Storage (зображення)
Аутентифікація: Firebase Auth (Google, Email/Пароль)
Деплой: GitHub Actions + FTP

Функціонал
🔹 1. Аутентифікація користувачів
✅ Реєстрація та вхід через Google
✅ Реєстрація та вхід через Email/Пароль
✅ Завантаження аватарки при реєстрації
✅ Збереження профілю користувача у Firebase Firestore

📄 Файл: src/context/UserContext.tsx
📄 Файл: src/components/Navbar.tsx

🔹 2. Створення та проходження квестів
✅ Створення квесту через модальне вікно
✅ Додавання опису, часу проходження, типу завдання, зображення
✅ Завантаження квестів у Firebase Firestore
✅ Збереження автора квесту (імені та аватарки)
✅ Відображення списку квестів у QuestList

📄 Файл: src/components/QuestCreationModal.tsx
📄 Файл: src/components/QuestList.tsx

3.  Відображення списку квестів
    ✅ Динамічне завантаження квестів з Firestore
    ✅ Відображення автора квесту (аватар + ім'я)
    ✅ Пагінація квестів (16 на сторінці)
    ✅ Відображення стану "Завантаження..." або "Немає квестів"

📄 Файл: src/components/QuestList.tsx
📄 Файл: src/components/QuestCard.tsx

🔹 4. Навігація та UI
✅ Головна сторінка з кнопками "Створити свій квест!" і "Перейти до існуючих"
✅ Використання Headless UI для модальних вікон
✅ Темна тема (TailwindCSS)
✅ Динамічні кнопки з анімацією Gradient Animation

📄 Файл: src/components/About.tsx
📄 Файл: src/components/Navbar.tsx

📁 Структура проєкту
📦 src
┣ 📂 assets # Зображення та статичні файли
┣ 📂 components # Компоненти React (Navbar, QuestList, QuestCard)
┣ 📂 context # Контекст аутентифікації (UserContext)
┣ 📂 lib # Firebase конфігурація
┣ 📂 pages # Основні сторінки (Main Page, Profile)
┣ 📂 styles # Глобальні стилі (TailwindCSS)
┗ 📜 App.tsx # Головний файл React

🔥 Як запустити проєкт?
1️⃣ Встановлення залежностей
npm install

2️⃣ Запуск проєкту
npm run dev

🌍 Перемінні середовища
Створіть файл .env у корені проєкту та додайте свої Firebase API ключі:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
