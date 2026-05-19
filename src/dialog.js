import { addToList, toDoList } from "./todo.js";
import { displayList } from "./dom.js";

const dialog = document.querySelector("dialog");

const title = document.querySelector("#title");
const project = document.querySelector("#project");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
export const confirmButton = document.querySelector("#confirm");

export function submitForm() {
    addToList(title.value, project.value, description.value, dueDate.value, priority.value);
    displayList(toDoList);
    dialog.close();
};