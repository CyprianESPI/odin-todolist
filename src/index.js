import Styles from "./styles.css";
import Todo from './components/todo.js';
import Project from "./components/project.js";
import TodoUi from "./components/todoUi.js";
import ProjectUi from "./components/projectUi.js";
import Db from "./components/db.js";

/* Load DB */
let DB = null;
const json = localStorage.getItem(Db.KEY);
if (json) {
    DB = new Db(JSON.parse(json));
}
console.log("loaded db:", DB);

DB = new Db({
    "Notes": new Project("Notes", {}),
    "UiTodo": new Todo("Title", "Content...", "", 0),
    "UiProject": new Project("Title", {}),
    "Projects": {
        "New project": new Project("New project", {})
    }
});
console.log("DB: ", DB);
DB.save();

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
    </span>`;

/* Projects */
const projects = document.createElement("div");
projects.innerHTML =
    `<span>
    <button class="material-symbols-outlined" id="addProjectBtn">add</button>
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

// Listen to DOM change
/* Prepare Ui classes */
const TODO_UI = new TodoUi(DB.data[0].todos[0]);
TODO_UI.CreateInputUi(home);

const PROJECT_UI = new ProjectUi(DB.data[0]);
PROJECT_UI.CreateInputUi(projects);

const newTodoBtn = document.getElementById("newTodoBtn");
const setDateBtn = document.getElementById("setDateBtn");
const setPrioBtn = document.getElementById("setPrioBtn");
const setProjBtn = document.getElementById("setProjBtn");
const saveTodoBtn = document.getElementById("saveTodoBtn");

saveTodoBtn.addEventListener('click', (e) => {
    DB.data[1].todos.push(TODO_UI.todo);
    TODO_UI.todo = new Todo(TODO_UI.todo.title, TODO_UI.todo.content);
    DB.save();
});

const addProjectBtn = document.getElementById("addProjectBtn");
addProjectBtn.addEventListener("click", (e) => {
    DB.data.push(PROJECT_UI.project);
    PROJECT_UI.project = new Project(PROJECT_UI.project.title, []);
    DB.save();
});