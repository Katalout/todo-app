import "./styles.css";

import { toDo, toDoList, addToList } from "./todo.js";
import { displayList } from "./dom.js";

addToList("Example2", "Examples", "This is also an example description", new Date("2026-06-02"), "Low");
console.log(toDoList);

displayList(toDoList);
