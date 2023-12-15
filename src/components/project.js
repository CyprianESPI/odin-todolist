// components/todo.js
import Todo from './todo.js'; // Ensure correct path based on your file structure

class Project {
    constructor(name, todos) {
        this._name = name;
        this._todos = todos;
    }
    // Other methods or properties specific to Todo class
    logInfo() {
        console.log(this);
    }

    get name() {
        return this._name;
    }
    set name(newVal) {
        this._name = newVal;
        this.logInfo();
    }

    get todos() {
        return this._todos;
    }
    set todos(newVal) {
        this._todos = newVal;
        this.logInfo();
    }

    AddTodo(todo) {
        this._todos.push(todo);
        this.logInfo();
    }
}

export default Project;