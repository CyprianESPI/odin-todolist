import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    constructor(project) {
        this.project = project;
        this.uiDisplay = document.createElement("div");
    }

    // Other methods or properties specific to Todo class
    CreateUiInput(parent, db, refreshUi) {
        const addBtn = document.createElement("button");
        addBtn.className = "material-symbols-outlined";
        addBtn.innerText = "add";
        addBtn.addEventListener('click', (e) => {
            db.data["Projects"][this.project.title] = this.project;
            this.project = new Project(this.project.title, {});
            db.save();
            refreshUi();
        });
        parent.appendChild(addBtn);

        const inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.value = this.project.title;
        inputTitle.addEventListener("input", (e) => {
            this.project.title = e.target.value;
        });
        parent.appendChild(inputTitle);
    }

    CreateUiDisplay(parent, db) {
        this.uiDisplay.innerHTML =
            `<h2>${this.project.title}</h2>
            `;

        const todoContainer = document.createElement("div");
        this.uiDisplay.appendChild(todoContainer);
        parent.appendChild(this.uiDisplay);

        Object.entries(this.project.todos).forEach(([k, v]) => {
            console.log("The key: ", k);
            console.log("The value: ", v);

            const todoUi = new TodoUi(v);
            todoUi.CreateUiTemplate(todoContainer, db);
        });

        console.log("parent:", parent);
    }
}

export default ProjectUi;