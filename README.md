# Task Management Web Application (Todo List)

A dynamic, client-side task manager built with **HTML, CSS, and JavaScript**. Tasks persist across browser sessions using `localStorage` — no backend required.

## ✨ Features
- Add, complete, and delete tasks
- Filter by **All / Active / Completed**
- Clear all completed tasks at once
- Live counter of remaining tasks
- Persistent storage via `localStorage`
- Responsive, dark-themed UI

## 🧠 Concepts Used
| Concept | Where |
|---|---|
| **DOM Manipulation** | `document.getElementById`, `createElement`, `innerHTML` |
| **Event-Driven Programming** | `addEventListener` for `submit`, `click`, `change` |
| **localStorage API** | `setItem` / `getItem` for persistence |
| **JSON Serialization** | `JSON.stringify` / `JSON.parse` |
| **ES6+ Features** | Arrow functions, `const`/`let`, template literals, spread operator, array methods (`map`, `filter`) |
| **Immutable State Updates** | Re-creating arrays instead of mutating |
| **Form Handling** | `preventDefault()` to stop page reload |
| **Accessibility** | `aria-label`, `aria-live`, semantic HTML |

## 📁 Files
```
todo-app/
├── index.html   # Markup & structure
├── style.css    # Dark theme & responsive layout
└── script.js    # Logic, state, persistence
```

## 🚀 Run Locally
Just open `index.html` in any browser — no build step needed.

## 🌐 Deploy to GitHub Pages

1. **Create a GitHub repo** (e.g. `todo-app`):
   ```bash
   cd todo-app
   git init
   git add .
   git commit -m "Initial commit: Todo List app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/todo-app.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, choose `Deploy from a branch`
   - Select branch `main` and folder `/ (root)`
   - Click **Save**

3. **Visit your live site** in ~1 minute at:
   `https://<your-username>.github.io/todo-app/`
