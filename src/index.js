import Styles from "./styles.css";
import Note from './components/note.js';
import Todo from './components/todo.js';
import Project from "./components/project.js";

/* Prepare objects */
const myNote = new Note('Title', 'Content');
console.log(myNote);

const myTodo = new Todo("title", "content", "dd", 1);
console.log(myTodo);

const myProject = new Project("myproj", myNote, myTodo);
console.log(myProject);


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
        <input>
        <input>
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