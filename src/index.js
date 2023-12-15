import Styles from "./styles.css";
import Todo from './components/todo.js';
import Project from "./components/project.js";
import TodoUi from "./components/todoUi.js";
import ProjectUi from "./components/projectUi.js";
import Db from "./components/db.js";

/* Load DB */
let DB = null;
DB = new Db(
    [new Project("NewProject", [new Todo("title", "content", "", 0)]),
    new Project("Default", [new Todo("def title", "def content", "", 0)])]);
console.log("DB: ", DB);
DB.update();
try {
    const json = localStorage.getItem(Db.KEY);
    console.log("try json:", json);
    if (!json)
        DB = JSON.parse();
}
catch {
    console.log(DB);
}
console.log("loaded db:", DB);

/* MAIN */
const content = document.getElementById("content");

/* Tabs */
class Tab {
    static active = "tabActive";
    static inactive = "tabInactive";

    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.content.className += Tab.active;
    }

    CreateTabButton() {
        const elem = document.createElement("button");
        elem.className = "tabButton";
        elem.innerText = this.name;

        elem.addEventListener("click", () => {
            this.SetActive();
        });

        return elem;
    }

    SetActive() {
        Tabs.forEach((tab) => {
            tab.content.className = tab.content.className.replace(Tab.active, Tab.inactive);
        });
        this.content.className = this.content.className.replace(Tab.inactive, Tab.active);
        console.debug(Tabs);
    }
}

/* Home */
const home = document.createElement("div");
home.innerHTML =
    `<span>
        <button class="material-symbols-outlined" id="newTodoBtn">add</button>
        <button class="material-symbols-outlined" id="setDateBtn">edit_calendar</button>
        <button class="material-symbols-outlined" id="setPrioBtn">priority_high</button>
        <button class="material-symbols-outlined" id="setProjBtn">dashboard</button>
        <button class="material-symbols-outlined" id="saveTodoBtn">save</button>
    </span>
    <div>
        <input type="text" id="todo-title">
        <textarea id="todo-content">
        </textarea>
    </div>`;

/* Projects */
const projects = document.createElement("div");
projects.innerHTML =
    `<span>
    <button class="material-symbols-outlined" id="newProjectBtn">add</button>
    <input type="text" id="project-name">
    </span>
    <div id="projects-container">
    </div>`;

/* Deadlines */
const deadlines = document.createElement("div");
deadlines.innerHTML =
    `<span>Deadlines</span>
    <div id="deadlines-container">
    </div>`;

const Tabs = [new Tab("Home", home), new Tab("Projects", projects), new Tab("Deadlines", deadlines)];
const tabs = document.createElement("div");
tabs.className = "tabContainer";
const main = document.querySelector("main");
Tabs.forEach((tab) => {
    tabs.appendChild(tab.CreateTabButton());
    main.appendChild(tab.content);
});
content.appendChild(tabs);
Tabs[0].SetActive();

/* Link DOM objects to DB */
// HOME
const todoTitle = document.getElementById("todo-title");
const todoContent = document.getElementById("todo-content");
// Update from DB
function updateTodoUI() {
    todoTitle.value = DB.data[0].todos[0].title;
    todoContent.value = DB.data[0].todos[0].content;
}

updateTodoUI();

// Listen to DOM change
todoTitle.addEventListener("input", (e) => {
    DB.todo.title = e.target.value;
});
todoContent.addEventListener("input", (e) => {
    DB.todo.content = e.target.value;
});

const newTodoBtn = document.getElementById("newTodoBtn");
const setDateBtn = document.getElementById("setDateBtn");
const setPrioBtn = document.getElementById("setPrioBtn");
const setProjBtn = document.getElementById("setProjBtn");
const saveTodoBtn = document.getElementById("saveTodoBtn");

newTodoBtn.addEventListener('click', (e) => {
    DB.todo.reset();
    updateTodoUI();
});

saveTodoBtn.addEventListener('click', (e) => {
    DB.projects[0].AddTodo(DB.todo);
    PROJECTS_UI[0].UpdateView();
    DB.todo = new Todo(DB.todo.title, DB.todo.content);
    updateTodoUI();
});

// PROJECTS
function UiAddProject(proj) {
    const projUi = new ProjectUi(proj);
    PROJECTS_UI.push(projUi);
    projectsContainer.appendChild(projUi.GetView());
}
const newProjectBtn = document.getElementById("newProjectBtn");

newProjectBtn.addEventListener('click', (e) => {
    DB.AddProject(DB.project);
    UiAddProject(DB.project);
    DB.project = new Project(DB.project.name, []);
    updateTodoUI();
});

// Update from DB
const projectName = document.getElementById("project-name");
function updateProjectUI() {
    projectName.value = DB.data[0].name;
}
updateProjectUI();
// Listen to DOM change
projectName.addEventListener("input", (e) => {
    DB.data.project.name = e.target.value;
});

let PROJECTS_UI = [];
const projectsContainer = document.getElementById("projects-container");
for (let i = 0; i < DB.data.length; i++) {
    UiAddProject(DB.data[i]);
}