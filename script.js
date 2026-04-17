// ===== Task Management App =====
// Concepts: DOM manipulation, event listeners, localStorage, array methods, ES6+

const STORAGE_KEY = "tasks.v1";

// State
let tasks = loadTasks();
let currentFilter = "all";

// DOM references
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("counter");
const emptyState = document.getElementById("empty-state");
const filterButtons = document.querySelectorAll(".filter[data-filter]");
const clearBtn = document.getElementById("clear-completed");

// ---------- Persistence ----------
function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// ---------- Actions ----------
function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  tasks.unshift({
    id: Date.now().toString(),
    text: trimmed,
    completed: false,
  });
  saveTasks();
  render();
}

function toggleTask(id) {
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

function clearCompleted() {
  tasks = tasks.filter((t) => !t.completed);
  saveTasks();
  render();
}

// ---------- Rendering ----------
function getFilteredTasks() {
  if (currentFilter === "active") return tasks.filter((t) => !t.completed);
  if (currentFilter === "completed") return tasks.filter((t) => t.completed);
  return tasks;
}

function render() {
  const filtered = getFilteredTasks();
  list.innerHTML = "";

  filtered.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} aria-label="Toggle task" />
      <span class="task__text"></span>
      <button class="task__delete" aria-label="Delete task">×</button>
    `;
    li.querySelector(".task__text").textContent = task.text;
    li.querySelector('input[type="checkbox"]').addEventListener("change", () =>
      toggleTask(task.id)
    );
    li.querySelector(".task__delete").addEventListener("click", () =>
      deleteTask(task.id)
    );
    list.appendChild(li);
  });

  // Counter
  const remaining = tasks.filter((t) => !t.completed).length;
  counter.textContent = `${remaining} ${remaining === 1 ? "task" : "tasks"} left`;

  // Empty state
  emptyState.classList.toggle("hidden", filtered.length > 0);
}

// ---------- Event listeners ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterButtons.forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });
});

clearBtn.addEventListener("click", clearCompleted);

// Initial render
render();
