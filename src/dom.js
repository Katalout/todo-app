import { formatDistanceToNow } from "date-fns";
import { removeFromList } from "./todo.js";

export function displayList(list) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    list.forEach((item) => {
        let card = document.createElement("div");
        card.classList.add("card", "shadow");
        let leftside = document.createElement("div");
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

        // overdue? if dueDate<now, csinaljon vmit

        prio.textContent = item.priority;
        main.appendChild(card);
        card.append(leftside, deleteButton);
        leftside.append(title, description, dueDate, prio);

        deleteButton.addEventListener("click", (event) => {
            const button = event.target;
            const uuid = button.dataset.uuid;
            removeFromList(uuid);
            displayList(list);
        });
    });
}