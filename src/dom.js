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
        dueDate.textContent = item.dueDate;
        prio.textContent = item.priority;
        main.appendChild(card);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(prio);
    });
}