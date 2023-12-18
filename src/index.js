import Styles from "./styles.css";
import Todo from './components/todo.js';
import Project from "./components/project.js";
import TodoUi from "./components/todoUi.js";
import ProjectUi from "./components/projectUi.js";
import Db from "./components/db.js";
import Tab from "./components/tab.js";
import Utils from "./components/utils.js";

// ======================== //
// Global vars...
// ======================== //
let DB = null;
const content = document.getElementById("content");
// Home tab
const home = document.createElement("div");

// Projects tab
const projects = document.createElement("div");
projects.innerHTML =
    `<div id="projects-input">
    </div>
    <div id="projects-container">
    </div>`;

// Deadlines tab
const deadlines = document.createElement("div");
deadlines.innerHTML =
    `<span>Deadlines</span>
    <div id="deadlines-container">
    </div>`;


// ======================== //
// Functions...
// ======================== //
function loadDb() {
    const json = localStorage.getItem(Db.KEY);
    if (json) {
        DB = new Db(JSON.parse(json));
    }
    console.log("loaded db:", DB);

    // These keys are important
    DB = new Db({
        "Notes": new Project("Notes", {}),
        "UiTodo": new Todo("Title", "Content...", "", 0),
        "UiProject": new Project("Title", {}),
        "Projects": {
            "New Project": new Project("New Project", {}),
        }
    });
    console.log("DB: ", DB);
    DB.save();
}

function createTabs() {
    const Tabs = [new Tab("Home", home), new Tab("Projects", projects), new Tab("Deadlines", deadlines)];
    Tab.TABS = Tabs;
    const tabs = document.createElement("div");
    tabs.className = "tabContainer";
    const main = document.querySelector("main");
    Tabs.forEach((tab) => {
        tabs.appendChild(tab.CreateTabButton());
        main.appendChild(tab.content);
    });
    content.appendChild(tabs);
    Tabs[0].SetActive();
}

function loadUiProjectInput() {
    const projectsInput = document.getElementById("projects-input");
    const projectUi = new ProjectUi(DB.data["UiProject"]);
    projectUi.CreateUiInput(projectsInput, DB, refreshUi);
}

function refreshUi() {
    refreshUiHome();
    refreshUiProjects();
}

function refreshUiHome() {
    const todoUi = new TodoUi(DB.data["UiTodo"]);
    todoUi.CreateUiTemplate(true, "", home, DB, refreshUi);
}

function refreshUiProjects() {
    const projectsContainer = document.getElementById("projects-container");
    Utils.removeContent(projectsContainer);
    // Display special Notes
    const projectUi = new ProjectUi(DB.data["Notes"]);
    projectUi.CreateUiDisplay(projectsContainer, DB, refreshUi);
    // Display regular Projects
    Object.entries(DB.data["Projects"]).forEach(([k, v]) => {
        const projectUi = new ProjectUi(v);
        projectUi.CreateUiDisplay(projectsContainer, DB, refreshUi);
    });
}




function main() {
    loadDb();
    createTabs();
    loadUiProjectInput();
    refreshUi();
}

// ======================== //
// Main
// ======================== //
main();