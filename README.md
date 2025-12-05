# 📝 ToDoApp  
**“Make effort for doing tasks everyday”**

A lightweight, clean, and functional full-stack Todo application designed to help users build daily discipline and manage tasks effectively. Built primarily with **TypeScript**, this project includes both a frontend UI and a backend API.

---

## 🚀 Live Demo & Deployment Status

### 🔗 Live Demo  
https://todoapp-z83f.onrender.com/

> ⚠️ **Note:** Render free-tier services may “cold start,” causing slow loading or temporary downtime.  
> If the page does not load:  
> 1. Wait 10–20 seconds and refresh  
> 2. Check Render service logs  
> 3. Try the base URL `/` or a different list ID such as `/1`

---

## 🧰 Tech Stack

| Language / Technology | Percentage | Description |
|----------------------|------------|-------------|
| **TypeScript**       | 76.3%      | Strong-typed logic for backend + frontend |
| **JavaScript**       | 17.0%      | Additional scripts and UI interactions |
| **CSS**              | 6.1%       | Styling and layout |
| **HTML**             | 0.6%       | Base markup for UI |

---

## 🗂️ Project Structure

```
ToDoApp/
├── backend/               # Backend API (Node.js + TypeScript)
│   ├── src/               # Source code: routes, controllers, models, etc.
│   ├── package.json       # Backend dependencies & scripts
│   └── (other backend config files)
├── frontend/              # Frontend UI (TypeScript + HTML + CSS)
│   ├── src/               # Frontend source code: UI components, logic
│   ├── package.json       # Frontend dependencies & scripts
│   └── (other frontend config files)
├── .gitignore             # Git ignore file  
├── package.json           # Root package — for project-level dependencies / scripts  
├── package-lock.json      # Lockfile for reproducible installs  
└── README.md              # This README file  
```

---

### 📄 Explanation

- **backend/** — contains all server-side code: API endpoints, business logic, data handling.  
- **frontend/** — contains client-side code: UI, user interactions, task rendering.  
- **Root files** — `.gitignore`, `package.json`, `package-lock.json`, plus the main README.  



## ✨ Features

### Core TodoApp Features  
- ✍️ **Create new tasks**  
- ✏️ **Edit existing tasks**  
- 🗑️ **Delete tasks**  
- ✅ **Mark tasks as completed or incomplete**  
- 🎨 **Simple and intuitive UI**  
- 🔗 **API-based list system** (`/1`, `/2`, etc.)  
- 🔄 **Automatically updates task states**  
- ⚡ **Fast and lightweight with TypeScript efficiency**  

---

## 🏗️ Project Architecture

This project is split into two main parts:

### **1️⃣ Backend**
- Built with Node.js + TypeScript  
- Provides RESTful API endpoints  
- Handles task creation, updates, deletion, and completion toggling  
- Clean and maintainable code structure  

### **2️⃣ Frontend**
- Vanilla TypeScript + HTML + CSS  
- Communicates with backend using `fetch()`  
- Dynamically renders tasks and UI interactions  
- Lightweight and easily customizable  

---

## 📥 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Khanhbroo/ToDoApp.git
cd ToDoApp
```

### 2. Install dependencies  
If the project is split:

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

If everything is in one directory:
```bash
npm install
```

### 3. Run the application locally

**Backend**
```bash
npm run dev
```

**Frontend** (if using a dev server)
```bash
npm run start
```

Or open `index.html` directly in a browser.

---

## ⚡ Usage

Once the app is running:

- Add tasks via the input bar  
- Press Enter → task appears instantly  
- Click checkbox → mark as complete  
- Edit or delete tasks easily  
- Tasks sync immediately with the backend  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo  
2. Create a feature branch  
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to GitHub  
   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request  

---

## 📸 Screenshot
<img width="1800" height="900" alt="image" src="https://github.com/user-attachments/assets/289f6941-19ed-46bb-85be-477c6418b85c" />
<img width="857" height="804" alt="image" src="https://github.com/user-attachments/assets/fa492ef0-bd14-458e-874a-ba75f19e8c71" />

## 🔮 Future Improvements

Here are some planned enhancements to make ToDoApp more powerful and user-friendly:

- 🔐 **Add user authentication** (login/register)  
- 🗂️ **Support multiple todo lists per user**  
- 🏷️ **Add task categories or tags**  
- ⏰ **Add due dates, reminders, and notifications**  
- ↕️ **Implement drag-and-drop task reordering**  
- 🌙 **Add dark mode toggle**  
- 🎨 **Improve UI/UX with animations and better layout**  
- 💾 **Add database persistence for long-term storage**  
- 📊 **Build a dashboard with task statistics** (completed %, streaks, productivity score)  
- 🔄 **Enable syncing across devices**  
- 📱 **Add full mobile-responsive layout**  

---

## 👨‍💻 Author  

### ✨ **ToDoApp — Developed by Khanh Doan**  
Built with ❤️ using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
- 🧑‍🚀 Passionate full-stack developer  
- 💡 Loves building clean and efficient applications  
- 🚀 Open to contributions, ideas, and collaborations  

---
## ⭐ Support  
**Feel free to fork, contribute, or use this project as a foundation for your own apps.**  
Your support means a lot! ⭐
If you like this project, please give it a **⭐ star on GitHub** — it helps a lot!
