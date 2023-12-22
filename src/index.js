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
        console.log("Loaded db from localStorage:", DB);
    }
    else {
        // These keys are important
        DB = new Db({
            "Notes": new Project("Notes", {}),
            "UiTodo": new Todo("Title", "Content...", "", 0),
            "UiProject": new Project("Title", {}),
            "Projects": {
                "New Project": new Project("New Project", {}),
            }
        });
        console.log("Created new db:", DB);
        DB.save();
    }
}

function createTabs() {
    const Tabs = [new Tab("Home", home), new Tab("Dashboard", projects), new Tab("Schedule", deadlines)];
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

function refreshUi() {
    refreshUiHome();
    refreshUiProjects();
}

function refreshUiHome() {
    const todoUi = new TodoUi(DB.data["UiTodo"]);
    todoUi.CreateUiTemplate(true, "", home, DB, refreshUi);

    const projectUi = new ProjectUi(DB.data["UiProject"]);
    projectUi.CreateUiInput(home, DB, refreshUi);
}

function refreshUiProjects() {
    const projectsContainer = document.getElementById("projects-container");
    Utils.removeContent(projectsContainer);
    // Display regular Projects
    Object.entries(DB.data["Projects"]).forEach(([k, v]) => {
        const projectUi = new ProjectUi(v);
        projectUi.CreateUiDisplay(projectsContainer, DB, refreshUi);
    });
    // Display special Notes
    const projectUi = new ProjectUi(DB.data["Notes"]);
    projectUi.CreateUiDisplay(projectsContainer, DB, refreshUi);
}




function main() {
    loadDb();
    createTabs();
    refreshUi();
}

// ======================== //
// Main
// ======================== //
main();