class Todo {
    constructor(title, content, dueDate, priority) {
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static priorities = ["low", "medium", "high"];
}

export default Todo;