import Project from './project.js';
import TodoUi from './todoUi.js';

class ProjectUi {
    constructor(project) {
        this.project = project;
    }

    // Other methods or properties specific to Todo class
    CreateUiInput(parent, db, refreshUi) {
        const inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.placeholder = this.project.title;
        inputTitle.addEventListener("input", (e) => {
            this.project.title = e.target.value;
        });

        const addBtn = document.createElement("button");
        addBtn.className = "material-symbols-outlined add-button";
        addBtn.innerText = "add";
        addBtn.addEventListener('click', (e) => {
            const newProject = new Project(this.project.title, {});
            db.data["Projects"][newProject.title] = newProject;
            this.project = newProject;
            db.save();
            refreshUi();
        });

        // Fill the header
        const header = document.createElement("div");
        header.innerHTML =
            `<h2><span class="material-symbols-outlined add-button" >
            dashboard
            </span>
            Projects: ${Object.keys(db.data["Projects"]).length}
            </h2>`;

        // Fill the container
        const container = document.createElement("div");
        container.className = "card";
        container.appendChild(header);
        const main = document.createElement("div");
        main.id = "project-input";
        main.appendChild(inputTitle);
        main.appendChild(addBtn);
        container.appendChild(main);
        parent.appendChild(container);
    }

    CreateUiDisplay(parent, db, refreshUi) {
        const container = document.createElement("div");
        container.className = "card project-view";
        const header = document.createElement("div");
        const title = document.createElement("h2");
        title.innerText = this.project.title;
        header.appendChild(title);
        // Notes must never be deleted
        if (this.project.title !== "Notes") {
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "material-symbols-outlined delete-button";
            deleteBtn.innerText = "delete";
            deleteBtn.addEventListener('click', (e) => {
                delete db.data["Projects"][this.project.title];
                db.save();
                refreshUi();
            });
            header.appendChild(deleteBtn);
        }


        container.appendChild(header);

        const todosContainer = document.createElement("div");
        todosContainer.className = "project-view-card-main";

        Object.entries(this.project.todos).forEach(([k, v]) => {
            console.log("CreateUiDisplay kvp:", k, v);
            const todoUi = new TodoUi(v);
            const todoContainer = document.createElement("div");
            todosContainer.appendChild(todoContainer);
            todoUi.CreateUiTemplate(false, this.project.title, todoContainer, db, refreshUi);
        });

        container.appendChild(todosContainer);
        parent.appendChild(container);
    }
}

export default ProjectUi;