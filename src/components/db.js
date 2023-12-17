import Project from './project.js';
import Todo from './todo.js';

class Db {
    static KEY = "db";

    constructor(data) {
        this.data = data;
    }
    // Other methods or properties specific to Todo class
    save() {
        const json = JSON.stringify(this.data);
        localStorage.setItem(Db.KEY, json);
        console.log("save", Db.KEY, json);
        console.log("full db:", this.data);
    }
}

export default Db;