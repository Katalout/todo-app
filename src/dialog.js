import { addToList, toDoList, findToDo } from "./todo.js";
import { displayList, formVersion } from "./dom.js";
import { format } from "date-fns";
import { store, loadList } from "./storage.js";

export const addButton = document.querySelector("#addButton");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

const title = document.querySelector("#title");
const project = document.querySelector("#project");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
export const confirmButton = document.querySelector("#confirm");

export function submitForm() {
    addToList(title.value, project.value, description.value, dueDate.value, priority.value);
};
function submitEdit(editable) {
    console.log("I'm still a sneaky bih");
    console.log(editable);
    editable.title = title.value;
    editable.project = project.value;
    editable.description = description.value;
    editable.dueDate = dueDate.value;
    editable.priority = priority.value;
};

export function openDialogVersion() {
    console.log(formVersion.intent);
    let editable;
    if (formVersion.intent == "add") {
        form.reset();
    } else {
        console.log(formVersion.intent);
        let uuid = formVersion.intent;
        editable = findToDo(uuid);
        console.log("identified editable:", editable);
        title.value = editable.title;
        project.value = editable.project;
        description.value = editable.description;
        dueDate.value = format(editable.dueDate, "yyyy-MM-dd");
        priority.value = editable.priority;
    }
    dialog.showModal();
    confirmButton.addEventListener("click", (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (formVersion.intent == "add") {
            submitForm();
            console.log(event.target);
        } else {
            editable = findToDo(formVersion.intent);
            console.log("submitting", editable); submitEdit(editable);
            store(toDoList);
        }
        displayList(toDoList);
        console.log(toDoList);
        dialog.close();
    });
};


//h