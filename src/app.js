const tasks = [
  { title: "Write a useful README", detail: "Explain what the project does, its features, and how someone can run it." },
  { title: "Add setup instructions", detail: "List prerequisites and exact install and run commands." },
  { title: "Keep secrets out of Git", detail: "Ignore .env files and commit a safe .env.example with placeholder names." },
  { title: "Ignore generated files", detail: "Exclude node_modules, build output, logs, and operating-system clutter." },
  { title: "Check the files before staging", detail: "Run git status and review every file before using git add." },
  { title: "Use meaningful commits", detail: "Make small commits with clear messages that explain each change." },
  { title: "Publish a public repository", detail: "Confirm the repository visibility and test the link in a private browser window." },
  { title: "Review the project from scratch", detail: "Follow your own README on a clean setup and fix any missing steps." }
];

const checklist = document.querySelector("#checklist");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const completion = document.querySelector("#completion");
const resetButton = document.querySelector("#reset-button");
const STORAGE_KEY = "repoready-checklist-v1";

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

let completed = new Set(loadProgress());

function updateProgress() {
  const count = completed.size;
  progressLabel.textContent = `${count} of ${tasks.length} complete`;
  progressBar.style.width = `${(count / tasks.length) * 100}%`;
  completion.hidden = count !== tasks.length;
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
}

function render() {
  checklist.replaceChildren();
  tasks.forEach((task, index) => {
    const label = document.createElement("label");
    label.className = `check-item${completed.has(index) ? " done" : ""}`;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = completed.has(index);
    input.setAttribute("aria-label", task.title);
    input.addEventListener("change", () => {
      if (input.checked) completed.add(index);
      else completed.delete(index);
      label.classList.toggle("done", input.checked);
      updateProgress();
    });

    const copy = document.createElement("span");
    const title = document.createElement("span");
    title.className = "item-title";
    title.textContent = task.title;
    const detail = document.createElement("span");
    detail.className = "item-detail";
    detail.textContent = task.detail;
    copy.append(title, detail);
    label.append(input, copy);
    checklist.append(label);
  });
  updateProgress();
}

resetButton.addEventListener("click", () => {
  completed.clear();
  render();
});

render();
