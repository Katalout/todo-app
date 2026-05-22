export class toDo {
    constructor(title, project, description, dueDate, priority, uuid = crypto.randomUUID()) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.uuid = uuid;
    }
};



// display projects in sidebar

export const toDoList = [
    new toDo("Example", "Examples", "This is an example description", new Date("2026-06-01"), "High"),
];

export function addToList(title, project, description, dueDate, priority) {
    let newToDo = new toDo(title, project, description, dueDate, priority);
    toDoList.push(newToDo);
};

export function removeFromList(uuid) {
    let removableItemIndex = toDoList.findIndex((item) => item.uuid == uuid);
    console.log(removableItemIndex);
    toDoList.splice(removableItemIndex, 1);
};

export function findToDo(uuid) {
    let todo = toDoList.find((item) => item.uuid == uuid);
    return todo;
};

// make array of projects
export const projectList = function () {
    let newProjectList = toDoList.reduce((arr, item) => {
        if (!arr.includes(item.project)) {
            arr.push(item.project);
        }
        return arr;
    }, []);
    return newProjectList;
};

//how to list todos per project
//if i click a project in the sidebar, the main updates with a filtered todolist

export function filterByProject(project) {
    let filteredList = toDoList.filter((item) =>
        item.project == project);
    return filteredList;
}
