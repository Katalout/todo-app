import "./styles.css";

import { toDo, toDoList, addToList } from "./todo.js";
import { displayList, formVersion } from "./dom.js";
import { addButton, openDialogVersion } from "./dialog.js";

addToList("Example2", "Examples", "This is also an example description", new Date("2026-05-20"), "Low");
console.log(toDoList);

displayList(toDoList);

addButton.addEventListener("click", () => {
    formVersion.intent = "add";
    openDialogVersion();
});