import Todo from './todo.js';

class TodoUi {
    constructor(todo) {
        this.todo = todo;
        this.uiHome = document.createElement("div");
        this.uiProject = document.createElement("div");
    }

    // Other methods or properties specific to Todo class
    CreateUiHome(parent) {
        this.uiHome.innerHTML =
            `<input type="text" id="todo-title" value="${this.todo.title}">
            <textarea id="todo-content">
                ${this.todo.content}
            </textarea>
            `;

        parent.appendChild(this.uiHome);

        console.log("parent:", parent);

        document.getElementById("todo-title").addEventListener("input", (e) => {
            this.todo.title = e.target.value;
        });
        document.getElementById("todo-content").addEventListener("input", (e) => {
            this.todo.content = e.target.value;
        });
    }

    CreateUiTemplate(parent, db) {
        const container = document.createElement("div");

        // Header
        const header = document.createElement("div");

        const addBtn = document.createElement("button");
        addBtn.className = "material-symbols-outlined";
        addBtn.innerText = "add";
        addBtn.addEventListener('click', (e) => {
            db.data["Notes"].todos[this.todo.title] = this.todo;
            db.data["UiTodo"].todo = new Todo(this.todo.title, this.todo.content);
            db.save();
        });
        header.appendChild(addBtn);

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
        footer.appendChild(inputProject);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "material-symbols-outlined";
        deleteBtn.innerText = "delete";
        footer.appendChild(deleteBtn);

        // Fill the container
        container.appendChild(header);
        container.appendChild(inputContent);
        container.appendChild(footer);
        parent.appendChild(container);

        console.log("container:", container);
    }


    CreateUiProject() {
        this.uiProject.innerHTML =
            `<h3>${this.todo.title}</h3>
            <p>${this.todo.content}</p>
            `;
    }
}

export default TodoUi;