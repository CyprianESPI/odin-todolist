import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    static GUID = 0;
    constructor(project) {
        this._project = project;
        this.container = document.createElement("div");
        ProjectUi.GUID++;
        this.id = `project-ui-${ProjectUi.GUID}`;
    }

    // Other methods or properties specific to Todo class
    logInfo() {
        console.log(this);
    }

    get project() {
        return this._project;
    }
    set project(newVal) {
        this._project = newVal;
        this.logInfo();
    }

    UpdateView() {
        this.container = this.GetView();
    }

    GetView() {
        this.container.innerHTML =
            `<h2>${this.project.name}</h2>
            <div id="todos-container">
            </div>
            `;
        console.log(this.project.todos);
        if (!this.project.todos) {
            this.project.todos.forEach(todo => {
                const todoUi = new TodoUi(todo);
                this.container.appendChild(todoUi.GetView());
            });
        }
        return this.container;
    }
}

export default ProjectUi;