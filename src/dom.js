import { formatDistanceToNow } from "date-fns";
import { removeFromList, findToDo, projectList } from "./todo.js";
import { openDialogVersion } from "./dialog.js";

export const formVersion = {
    set intent(type) {
        this.version = type;
    },
    get intent() { return this.version }
};

export function displayList(list) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    list.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("card", "shadow");
        let cardcontent = document.createElement("div");
        let cardbuttons = document.createElement("div");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let dueDate = document.createElement("p");
        let prio = document.createElement("p");
        title.textContent = item.title;
        description.textContent = item.description;
        dueDate.textContent = `Due in ${formatDistanceToNow(item.dueDate)}.`;

        let deleteButton = document.createElement("button");
        deleteButton.dataset.uuid = item.uuid;
        deleteButton.textContent = "Delete";

        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.uuid = item.uuid;
        // if edit is clicked, make formversion = edit.

        prio.textContent = item.priority;
        main.appendChild(card);
        card.append(cardcontent, cardbuttons);
        cardcontent.append(title, description, dueDate, prio);
        cardbuttons.append(deleteButton, editButton);

        deleteButton.addEventListener("click", (event) => {
            const button = event.target;
            const uuid = button.dataset.uuid;
            removeFromList(uuid);
            displayList(list);
        });
        editButton.addEventListener("click", () => {
            formVersion.intent = item.uuid;
            openDialogVersion();
        });
    }); displayProjectList(projectList());
};

export function displayProjectList(list) {
    const sidebar = document.querySelector(".sidebarContent");
    sidebar.innerHTML = "";
    list.forEach((item) => {
        let h2 = document.createElement("h2");
        h2.textContent = item;
        sidebar.appendChild(h2);
    });
};