import Project from './project.js';

class ProjectUi {
    constructor(project) {
        this._project = project;
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

    GetView() {
        const d = document.createElement("div");
        d.innerHTML =
            `<h2>${this._project._name}</h2>
            `;
        return d;
    }
}

export default ProjectUi;