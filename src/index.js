import Styles from "./styles.css";
import Todo from './components/todo.js';
import Project from "./components/project.js";

/* Prepare objects */

const myTodo = new Todo("title", "content", "dd", 1);
console.log(myTodo);

const myProject = new Project("myproj", myTodo);
console.log(myProject);

// DB
let PROJECTS = [new Project("Default", []), myProject];
// Current PROJECT
let PROJECT = new Project("MyProj", []);
// Current TODO
let TODO = new Todo("hello", "w");
console.log(PROJECTS);

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
    <div class="flex-container">
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
    <div class="flex-container">
    </div>`;

/* Deadlines */
const deadlines = document.createElement("div");
deadlines.innerHTML =
    `<span>Deadlines</span>
    <div>
        <input>
        <input>
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
    todoTitle.value = TODO.title;
    todoContent.value = TODO.content;
}

updateTodoUI();

// Listen to DOM change
todoTitle.addEventListener("input", (e) => {
    TODO.title = e.target.value;
});
todoContent.addEventListener("input", (e) => {
    TODO.content = e.target.value;
});

const newTodoBtn = document.getElementById("newTodoBtn");
const setDateBtn = document.getElementById("setDateBtn");
const setPrioBtn = document.getElementById("setPrioBtn");
const setProjBtn = document.getElementById("setProjBtn");
const saveTodoBtn = document.getElementById("saveTodoBtn");

newTodoBtn.addEventListener('click', (e) => {
    TODO.reset();
    updateTodoUI();
});

saveTodoBtn.addEventListener('click', (e) => {
    PROJECTS[0].AddTodo(TODO);
    TODO = new Todo(TODO.title, TODO.content);
    updateTodoUI();
});

// PROJECTS
const newProjectBtn = document.getElementById("newTodoBtn");

newProjectBtn.addEventListener('click', (e) => {
    PROJECTS.push(PROJECT);
    PROJECT = new Project(PROJECT.name, []);
    updateTodoUI();
});

// Update from DB
const projectName = document.getElementById("project-name");
function updateProjectUI() {
    projectName.value = PROJECT.name;
}
updateProjectUI();
// Listen to DOM change
projectName.addEventListener("input", (e) => {
    PROJECT.name = e.target.value;
});