class Todo {
    constructor(title, content, dueDate, priority) {
        this._title = title;
        this._content = content;
        this._dueDate = dueDate;
        this._priority = priority;
    }
    // Other methods or properties specific to Todo class
    get title() {
        return this._title;
    }
    set title(newVal) {
        console.log(this);
        this._title = newVal;
    }

    get content() {
        return this._title;
    }
    set content(newVal) {
        console.log(this);
        this._content = newVal;
    }
}

export default Todo;