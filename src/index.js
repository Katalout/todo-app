import "./styles.css";

import { toDo, toDoList, addToList, projectList } from "./todo.js";
import { displayList, displayProjectList, formVersion, allProjectsButton } from "./dom.js";
import { addButton, openDialogVersion } from "./dialog.js";

addToList("Example2", "Examples", "This is also an example description", new Date("2026-05-20"), "Low");
console.log(toDoList);
console.log(projectList());

displayList(toDoList);

allProjectsButton.addEventListener("click", () => displayList(toDoList));

addButton.addEventListener("click", () => {
    formVersion.intent = "add";
    openDialogVersion();
});