import Styles from "./styles.css";
import Note from './components/note.js';
import Todo from './components/todo.js';
import Project from "./components/project.js";

// Now you can create an instance of the Note class
const myNote = new Note('Title', 'Content');
console.log(myNote);

const myTodo = new Todo("title", "content", "dd", 1);
console.log(myTodo);

const myProject = new Project("myproj", myNote, myTodo);
console.log(myProject);

const content = document.getElementById("content");


/* Tabs */
class Tab {
    constructor(name) {
        this.name = name;
        this.active = false;
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
            tab.active = false
        });
        this.active = true;
    }
}

const Tabs = [new Tab("Home"), new Tab("Projects"), new Tab("Deadlines")];
const tabs = document.createElement("div");
tabs.className = "tabContainer";
Tabs.forEach((tab) => {
    tabs.appendChild(tab.CreateTabButton());
});
content.appendChild(tabs);
Tabs[0].SetActive();

