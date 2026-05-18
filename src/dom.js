import { formatDistanceToNow } from "date-fns";

export function displayList(list) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    list.forEach((item) => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let dueDate = document.createElement("p");
        let prio = document.createElement("p");
        title.textContent = item.title;
        description.textContent = item.description;
        dueDate.textContent = `Due in ${formatDistanceToNow(item.dueDate)}.`;

        // overdue? if dueDate<now, csinaljon vmit

        prio.textContent = item.priority;
        main.appendChild(card);
        card.append(title, description, dueDate, prio);
    });
}