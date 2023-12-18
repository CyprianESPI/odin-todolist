import Todo from './todo.js';
import Utils from './utils.js';

class TodoUi {
    static HOME_PROJECT = "Notes";

    constructor(todo) {
        this.todo = todo;
    }

    // This function clears any child from its parent
    // 2 options here, in home we display add to add item, and delete to clear content
    CreateUiTemplate(homePage, projectTitle, parent, db, refreshUi) {
        // Clear previous content
        Utils.removeContent(parent);

        const container = document.createElement("div");

        // Header
        const header = document.createElement("div");

        if (homePage) {
            const addBtn = document.createElement("button");
            addBtn.className = "material-symbols-outlined";
            addBtn.innerText = "add";
            addBtn.addEventListener('click', (e) => {
                const newTodo = new Todo(this.todo.title, this.todo.content, this.todo.dueDate, this.todo.priority);
                if (inputProject.value == "Notes") {
                    db.data["Notes"].todos[this.todo.title] = newTodo;
                }
                else {
                    db.data["Projects"][inputProject.value].todos[this.todo.title] = newTodo;
                }
                db.save();
                refreshUi();
            });
            header.appendChild(addBtn);
        }

        const inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.value = this.todo.title;
        inputTitle.addEventListener("input", (e) => {
            this.todo.title = e.target.value;
        });
        header.appendChild(inputTitle);

        // InputContent
        const inputContent = document.createElement("textarea");
        inputContent.innerText = this.todo.content;
        inputContent.addEventListener("input", (e) => {
            this.todo.content = e.target.value;
        });

        // Footer
        const footer = document.createElement("div");

        const inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.valueAsDate = new Date();
        footer.appendChild(inputDate);

        const inputPrio = document.createElement("input");
        inputPrio.type = "checkbox";
        footer.appendChild(inputPrio);

        const inputProject = document.createElement("select");
        const opt = document.createElement("option");
        opt.value = db.data["Notes"].title;
        opt.innerText = db.data["Notes"].title;
        inputProject.appendChild(opt);
        Object.entries(db.data["Projects"]).forEach(([k, v]) => {
            const opt = document.createElement("option");
            opt.value = v.title;
            opt.innerText = v.title;
            inputProject.appendChild(opt);
        });
        if (homePage) {
            inputProject.value = TodoUi.HOME_PROJECT;
        } else {
            inputProject.value = projectTitle;
        }
        inputProject.addEventListener("input", (e) => {
            if (homePage) {
                TodoUi.HOME_PROJECT = e.target.value;
            } else {
                //TODO switch project
            }
        });
        footer.appendChild(inputProject);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "material-symbols-outlined";
        deleteBtn.innerText = "delete";
        deleteBtn.addEventListener('click', (e) => {
            if (homePage) {
                db.data["UiTodo"].todo = new Todo("", "");
                this.todo = db.data["UiTodo"].todo;
                db.save();
                this.CreateUiTemplate(homePage, null, parent, db);
            } else {
                if (inputProject.value == "Notes") {
                    delete db.data["Notes"].todos[this.todo.title];
                }
                else {
                    delete db.data["Projects"][inputProject.value].todos[this.todo.title];
                }
                db.save();
                refreshUi();
            }
        });
        footer.appendChild(deleteBtn);

        // Fill the container
        container.appendChild(header);
        container.appendChild(inputContent);
        container.appendChild(footer);
        parent.appendChild(container);
    }
}

export default TodoUi;