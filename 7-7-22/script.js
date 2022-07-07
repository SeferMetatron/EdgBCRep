console.clear();

const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let time = h + ":" + m;

const getProductHTML = (task) => {
  return `
    <li >
        <div>
            <input type="checkbox">
            <span class="text-articles">${task}</span>
        </div>
        <p>${time}</p>
        <div id="${taskList.tasks.indexOf(task)}" class="delete">X</div>
    </li>`;
};

const taskList = {
  _taskList: [],

  get tasks() {
    return this._taskList;
  },

  set tasks(tasks) {
    this._taskList.push(tasks);
    this.renderHTML();
  },

  set removeTask(id) {
    this._taskList.splice(this._taskList.indexOf(id), 1);
    this.renderHTML();
  },

  renderHTML() {
    const $taskList = document.querySelector(".task-list");
    const quests = this.tasks.map(getProductHTML).join("");
    $taskList.innerHTML = `${quests}`;
  },
};

const $inputText = document.querySelector(".forminput");

$inputText.addEventListener("submit", (event) => {
  const $input = document.querySelector("input");
  taskList.tasks = $input.value;

  event.preventDefault();
  $input.value = "";
  if (event.target.tagName === "BUTTON") {
    taskList.removeTask = Number(event.target.id);
  }
});

const $deleteBtn = document.querySelector(".task-list");

$deleteBtn.addEventListener("click", (event) => {
  if (event.target.className === "delete")
    taskList.removeTask = Number(event.target.id);
});
