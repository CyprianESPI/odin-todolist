import Todo from './todo.js';

class TodoUi {
    static HOME_PROJECT = "Notes";

    constructor(todo) {
        this.todo = todo;
    }

    // homePage option selects the add/delete feature
    CreateUiTemplate(homePage, projectTitle, parent, db, refreshUi) {
        const container = document.createElement("div");
        container.className = "card todo";

        // Display How many todos are present in a given project
        const title = document.createElement("div");
        if (projectTitle === "Notes") {
            title.innerHTML =
                `<h2>
                ${Object.keys(db.data["Notes"].todos).length} Notes
                </h2>`;
        }
        else {
            title.innerHTML =
                `<h2>
                ${Object.keys(db.data["Projects"][projectTitle].todos).length} ${projectTitle}
                </h2>`;
        }
        if (homePage)
            container.appendChild(title);

        // Header
        const header = document.createElement("div");

        const inputTitle = document.createElement("input");
        inputTitle.type = "text";
        if (homePage)
            inputTitle.placeholder = this.todo.title;
        else
            inputTitle.value = this.todo.title;
        inputTitle.addEventListener("input", (e) => {
            this.todo.title = e.target.value;
        });
        header.appendChild(inputTitle);

        // InputContent
        const inputContent = document.createElement("div");
        const textArea = document.createElement("textarea");
        if (homePage)
            textArea.placeholder = this.todo.content;
        else
            textArea.innerText = this.todo.content;

        textArea.addEventListener("input", (e) => {
            this.todo.content = e.target.value;
        });
        inputContent.appendChild(textArea);

        // Footer
        const footer = document.createElement("div");
        footer.className = "todoFooter";

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
        inputProject.value = projectTitle;
        inputProject.addEventListener("input", (e) => {
            console.log("inputProject:", e.target.value);
            if (homePage) {
                TodoUi.HOME_PROJECT = e.target.value;
            } else {
                // Switch project
                const newTodo = new Todo(this.todo.title, this.todo.content, this.todo.dueDate, this.todo.priority);
                if (e.target.value == "Notes") {
                    db.data["Notes"].todos[this.todo.title] = newTodo;
                }
                else {
                    db.data["Projects"][e.target.value].todos[this.todo.title] = newTodo;
                }
                if (projectTitle == "Notes") {
                    delete db.data["Notes"].todos[this.todo.title];
                }
                else {
                    delete db.data["Projects"][projectTitle].todos[this.todo.title];
                }
            }
            db.save();
            refreshUi();
        });


        const inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.valueAsDate = new Date(this.todo.dueDate);
        footer.appendChild(inputDate);
        inputDate.addEventListener("input", (e) => {
            console.log("inputDate:", e.target.value);
            this.todo.dueDate = e.target.value;
            if (!homePage) {
                db.save();
                refreshUi();
            }
        });

        const inputPrio = document.createElement("select");
        Todo.priorities.forEach((option) => {
            const opt = document.createElement("option");
            opt.value = option;
            opt.innerText = option;
            inputPrio.appendChild(opt);
        });
        inputPrio.value = this.todo.priority;
        inputPrio.addEventListener("input", (e) => {
            console.log("inputPrio:", e.target.value);
            this.todo.priority = e.target.value;
            if (!homePage) {
                db.save();
                refreshUi();
            }
        });
        footer.appendChild(inputPrio);


        // + button only applies to homePage
        if (homePage) {
            const addBtn = document.createElement("button");
            addBtn.className = "material-symbols-outlined add-button";
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
            footer.appendChild(addBtn);
        }
        else {
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "material-symbols-outlined delete-button";
            deleteBtn.innerText = "delete";
            deleteBtn.addEventListener('click', (e) => {
                if (inputProject.value == "Notes") {
                    delete db.data["Notes"].todos[this.todo.title];
                }
                else {
                    delete db.data["Projects"][inputProject.value].todos[this.todo.title];
                }
                db.save();
                refreshUi();
            });
            footer.appendChild(deleteBtn);
        }

        // Fill the header
        header.appendChild(inputProject);
        // Fill the inputContent
        // Fill the footer

        // Fill the container
        container.appendChild(header);
        container.appendChild(inputContent);
        container.appendChild(footer);
        parent.appendChild(container);
    }
}

export default TodoUi;