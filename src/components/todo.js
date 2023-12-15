// components/todo.js
import Note from './note.js'; // Ensure correct path based on your file structure

class Todo extends Note {
    constructor(title, content, dueDate, priority) {
        super(title, content); // Call the constructor of the parent class
        this.dueDate = dueDate;
        this.priority = priority;
    }
    // Other methods or properties specific to Todo class
}

export default Todo;