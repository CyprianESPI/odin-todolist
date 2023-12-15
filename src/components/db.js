import Project from './project.js';
import Todo from './todo.js';

class Db {
    static KEY = "db";

    constructor(projects, todo, project) {
        this._projects = projects;
        this._todo = todo;
        this._project = project;
    }
    // Other methods or properties specific to Todo class
    update() {
        const json = JSON.stringify(this);
        console.log("json", json);
        localStorage.setItem(Db.KEY, json);
        console.log("update", this);
    }

    get projects() {
        return this._projects;
    }
    set projects(newVal) {
        this._projects = newVal;
        this.update();
    }

    AddProject(project) {
        console.log("AddProject");
        this.projects.push(project);
        this.update();
    }

    get todo() {
        return this._todo;
    }
    set todo(newVal) {
        this._todo = newVal;
        this.update();
    }

    get project() {
        return this._project;
    }
    set project(newVal) {
        this._project = newVal;
        this.update();
    }
}

export default Db;