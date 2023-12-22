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
home.className = "home-container";

// Projects tab
const projects = document.createElement("div");
projects.className = "projects-container";

// Deadlines tab
const deadlines = document.createElement("div");
deadlines.className = "deadlines-container";

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
            "Notes": new Project("Notes",
                {
                    "Swim": new Todo("Swim", "I should start swimming...", new Date(), "low"),
                }),
            "UiTodo": new Todo("TodoTitle...", "TodoContent...", new Date(), "low"),
            "UiProject": new Project("ProjectTitle...", {}),
            "Projects": {
                "Work": new Project("Work",
                    {
                        "ProjectX": new Todo("ProjectX", "Finish this ASAP!!!!", new Date(), "high"),
                    }),
                "Sport": new Project("Sport", {}),
                "Shopping": new Project("Shopping",
                    {
                        "Costco": new Todo("Costco", "Eggs\nBacon\nBread", new Date(), "low"),
                        "Amazon": new Todo("Amazon", "LOTR 1,2 & 3", new Date(), "medium"),
                    }),
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
    refreshUiDeadlines();
}

function refreshUiHome() {
    const todoUi = new TodoUi(DB.data["UiTodo"]);
    todoUi.CreateUiTemplate(true, "", home, DB, refreshUi);

    const projectUi = new ProjectUi(DB.data["UiProject"]);
    projectUi.CreateUiInput(home, DB, refreshUi);
}

function refreshUiProjects() {
    const projectsContainer = projects;
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

function refreshUiDeadlines() {
    const deadlinesContainer = deadlines;
    Utils.removeContent(deadlinesContainer);
    let todos = [];
    // Get a flat array of Todos
    Object.entries(DB.data["Projects"]).forEach(([kProj, vProj]) => {
        Object.entries(vProj.todos).forEach(([kTodo, vTodo]) => {
            todos.push(vTodo);
        });
    });
    console.log("refreshUiDeadlines:", todos);

    if (todos.length === 0)
        return;

    // Sort array by date
    todos.sort((a, b) => { return new Date(b.dueDate) - new Date(a.dueDate) });
    console.log("refreshUiDeadlines, sorted:", todos);

    // Fill container
    todos.forEach((todo) => {
        const todoUi = new TodoUi(todo);
        todoUi.CreateUiTemplate(false, "", deadlinesContainer, DB, refreshUi);
    });
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