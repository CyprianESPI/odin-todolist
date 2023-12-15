import Project from './project.js';
import Todo from './todo.js';

class Db {
    static KEY = "db";

    constructor(data) {
        this.data = data;
    }
    // Other methods or properties specific to Todo class
    update() {
        const json = JSON.stringify(this);
        console.log("json", json);
        localStorage.setItem(Db.KEY, json);
        console.log("update", this);
    }
}

export default Db;