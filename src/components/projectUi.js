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
}

export default ProjectUi;