import Styles from "./styles.css";
import Note from './components/note.js';
import Todo from './components/todo.js';
import Project from "./components/project.js";

// Now you can create an instance of the Note class
const myNote = new Note('Title', 'Content');
console.log(myNote);

const myTodo = new Todo("title", "content", "dd", 1);
console.log(myTodo);

const myProject = new Project("myproj", myNote, myTodo);
console.log(myProject);
