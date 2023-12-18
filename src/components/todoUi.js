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


    CreateUiProject() {
        this.uiProject.innerHTML =
            `<h3>${this.todo.title}</h3>
            <p>${this.todo.content}</p>
            `;
    }
}

export default TodoUi;