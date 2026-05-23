import "./styles.css";

import { toDo, toDoList, addToList, projectList } from "./todo.js";
import { displayList, displayProjectList, formVersion, allProjectsButton } from "./dom.js";
import { addButton, openDialogVersion } from "./dialog.js";
import { store } from "./storage.js";

console.log(toDoList);
console.log(projectList());

if (!localStorage.getItem("toDoList")) {
    store(toDoList)
};

displayList(toDoList);

allProjectsButton.addEventListener("click", () => displayList(toDoList));

addButton.addEventListener("click", () => {
    formVersion.intent = "add";
    openDialogVersion();
});