# 📚 Interactive Student Directory

A modern, responsive React web application for managing student records. Built with **React 19**, **Vite**, and **Pure CSS** — no external UI frameworks.

---

## 🚀 Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) version 18 or higher

### Steps

# 1. Clone the repository
git clone https://github.com/Leejaw-Chitrakar/React-Project-3rd-sem.git

# 2. Navigate to the project folder
cd ReactProject3rdsem

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev


Then open your browser and go to: **http://localhost:5173**

> **Note:** If port 5173 is in use, Vite will automatically switch to the next available port (e.g., 5174).

---

## 📸 Screenshots

### Desktop View — Student Directory
![Student Directory Desktop](./screenshots/desktop.png)

### Mobile View — Add New Student Form
![Mobile Form View](./screenshots/mobile.png)

> Add your screenshots to a `screenshots/` folder in the root of the project.

---

## ✨ Feature List

### Core Features
- ✅ **Add Student** — Fill in Name, Course, Age, and Grade via a validated form
- ✅ **Delete Student** — Remove entries with a confirmation prompt
- ✅ **Toggle Attendance** — Switch between Present / Absent with one click
- ✅ **Persistent Data** — All changes saved to `localStorage` (survives page refresh)

### Search & Discovery
- 🔍 **Live Search** — Filter students by name in real-time
- 📚 **Filter by Course** — Dynamic dropdown auto-generated from available courses
- 🟢 **Filter by Status** — Show only Present or Absent students
- 🔃 **Sort** — Sort alphabetically by Name or by Grade (highest first)

### Visual & UX
- ⭐ **Top Performer Badge** — Auto-awarded to students with Grade ≥ 90
- 🔴 / 🟢 **Status Badges** — Color-coded Present/Absent indicators
- 💬 **Empty State** — Friendly message when no students match the filter
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
ReactProject3rdsem/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx       # Status/label badges
│   │   │   ├── Button.jsx      # Reusable button (primary, danger, outline)
│   │   │   └── Input.jsx       # Reusable labeled input field
│   │   ├── styles/             # Component-specific CSS
│   │   ├── newstudent.jsx      # Add Student form
│   │   └── studentList.jsx     # Student grid with toolbar
│   ├── data/
│   │   └── studentData.js      # Initial mock student records
│   ├── App.jsx                 # Root component & state management
│   ├── index.css               # Global styles & CSS variables
│   └── main.jsx                # App entry point
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite | Build Tool & Dev Server |
| Vanilla CSS | Styling (no frameworks) |
| LocalStorage API | Data Persistence |
| React Hooks | State & Side Effect Management |

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint code checks |
| `npm run preview` | Preview the production build |

---

## 📝 Notes

- The project uses **CSS Variables** for a consistent, theme-able design system.
- All student IDs are auto-generated — no manual entry required.
- Data is cleared by running `localStorage.clear()` in the browser console.

---

*3rd Semester React Project — Samriddhi College*
