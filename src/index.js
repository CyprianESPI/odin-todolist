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
    `<span>
    <button class="material-symbols-outlined" id="addProjectBtn">add</button>
    </span>
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

function bindDataToDOM() {
    const PROJECT_UI = new ProjectUi(DB.data["UiProject"]);
    PROJECT_UI.CreateInputUi(projects);

    const addProjectBtn = document.getElementById("addProjectBtn");
    addProjectBtn.addEventListener("click", (e) => {
        DB.data["Projects"][PROJECT_UI.project.title] = PROJECT_UI.project;
        PROJECT_UI.project = new Project(PROJECT_UI.project.title, {});
        DB.save();
        refreshUi();
    });
}

function refreshUi() {
    refreshUiHome();
    refreshUiProjects();
}

function refreshUiHome() {
    const todoUi = new TodoUi(DB.data["UiTodo"]);
    todoUi.CreateUiTemplate(home, DB);
}

function refreshUiProjects() {
    const projectsContainer = document.getElementById("projects-container");
    Utils.removeContent(projectsContainer);
    // Display special Notes
    const projectUi = new ProjectUi(DB.data["Notes"]);
    projectUi.CreateUiDisplay(projectsContainer, DB);
    // Display regular Projects
    Object.entries(DB.data["Projects"]).forEach(([k, v]) => {
        console.log("The key: ", k);
        console.log("The value: ", v);

        const projectUi = new ProjectUi(v);
        projectUi.CreateUiDisplay(projectsContainer, DB);
    });
}




function main() {
    loadDb();
    createTabs();
    bindDataToDOM();
    refreshUi();
}

// ======================== //
// Main
// ======================== //
main();