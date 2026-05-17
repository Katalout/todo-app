export class toDo {
    constructor(title, project, description, dueDate, priority) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

export const toDoList = [
    new toDo("Example", "Examples", "This is an example description", new Date("2026-06-01"), "High"),
];

export function addToList(title, project, description, dueDate, priority) {
    let newToDo = new toDo(title, project, description, dueDate, priority);
    toDoList.push(newToDo);
};

