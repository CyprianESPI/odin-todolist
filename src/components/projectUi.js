import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    constructor(project) {
        this.project = project;
    }

    // Other methods or properties specific to Todo class
    CreateInputUi(parent) {
        const container = document.createElement("div");
        container.innerHTML =
            `<input type="text" id="project-title" value="${this.project.title}">
            `;

        parent.appendChild(container);

        console.log("parent:", parent);

        document.getElementById("project-title").addEventListener("click", (e) => {
            this.project.title = e.target.value;
        });
    }

    CreateUiDisplay(parent) {
        const container = document.createElement("div");
        container.innerHTML =
            `<h2>${this.project.title}</h2>
            `;

        const todoContainer = document.createElement("div");
        container.appendChild(todoContainer);
        parent.appendChild(container);

        Object.entries(this.project.todos).forEach(([k, v]) => {
            console.log("The key: ", k);
            console.log("The value: ", v);

            const todoUi = new TodoUi(v);
            todoUi.CreateUiHome(todoContainer);
        });

        console.log("parent:", parent);
    }
}

export default ProjectUi;