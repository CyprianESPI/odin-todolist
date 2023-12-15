class Todo {
    constructor(title, content, dueDate, priority) {
        this._title = title;
        this._content = content;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    reset() {
        this._title = "";
        this._content = "";
        this._dueDate = "";
        this._priority = 0;
    }

    // Other methods or properties specific to Todo class
    logInfo() {
        console.log(this);
    }

    get title() {
        return this._title;
    }
    set title(newVal) {
        this._title = newVal;
        this.logInfo();
    }

    get content() {
        return this._content;
    }
    set content(newVal) {
        this._content = newVal;
        this.logInfo();
    }
}

export default Todo;