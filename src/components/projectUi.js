import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    constructor(project) {
        this.project = project;
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

    CreateUiDisplay(parent, db, refreshUi) {
        const header = document.createElement("h2");
        header.innerText = this.project.title;
        parent.appendChild(header);

        Object.entries(this.project.todos).forEach(([k, v]) => {
            console.log("CreateUiDisplay kvp:", k, v);
            const todoUi = new TodoUi(v);
            const todosContainer = document.createElement("div");
            parent.appendChild(todosContainer);
            todoUi.CreateUiTemplate(false, todosContainer, db, refreshUi);
        });
    }
}

export default ProjectUi;