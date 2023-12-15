import Todo from './todo.js';

class TodoUi {
    constructor(todo) {
        this._todo = todo;
        this.container = document.createElement("div");
    }

    // Other methods or properties specific to Todo class
    logInfo() {
        console.log(this);
    }

    get todo() {
        return this._title;
    }
    set todo(newVal) {
        this._todo = newVal;
        this.logInfo();
    }

    GetView() {
        this.container.innerHTML =
            `<h3>${this._todo.title}</h3>
            <p>${this._todo.content}</p>
            `;
        return this.container;
    }
}

export default TodoUi;