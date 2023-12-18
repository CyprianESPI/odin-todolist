import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    constructor(project) {
        this.project = project;
        this.uiDisplay = document.createElement("div");
    }

    // Other methods or properties specific to Todo class
    CreateInputUi(parent) {
        const container = document.createElement("div");
        container.innerHTML =
            `<input type="text" id="project-title" value="${this.project.title}">
            `;

        parent.appendChild(container);

        console.log("parent:", parent);

        document.getElementById("project-title").addEventListener("input", (e) => {
            this.project.title = e.target.value;
        });
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