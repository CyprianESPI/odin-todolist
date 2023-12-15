import Styles from "./styles.css";
import Todo from './components/todo.js';
import Project from "./components/project.js";

/* Prepare objects */

const myTodo = new Todo("title", "content", "dd", 1);
console.log(myTodo);

const myProject = new Project("myproj", myTodo);
console.log(myProject);

// DB of projects
let PROJECTS = [myProject];
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
    `<span>Home</span>
    <div>
        <span>Save | DueDate | Prio | New </span>
        <input type="text" id="todo-title">
        <textarea id="todo-content">
        </textarea>
    </div>`;

/* Projects */
const projects = document.createElement("div");
projects.innerHTML =
    `<span>Projects</span>
    <div>
        <input>
        <input>
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
const main = document.createElement("main");
Tabs.forEach((tab) => {
    tabs.appendChild(tab.CreateTabButton());
    main.appendChild(tab.content);
});
content.appendChild(tabs);
content.appendChild(main);
Tabs[0].SetActive();

/* Link DOM objects to DB */
const todoTitle = document.getElementById("todo-title");
const todoContent = document.getElementById("todo-content");
todoTitle.addEventListener("input", (e) => {
    TODO.title = e.target.value;
});
todoContent.addEventListener("input", (e) => {
    TODO.content = e.target.value;
});