//store toDoList, should be enough no?
//set when: new todo, edit todo submitted
//get when: displaylist is called?

export function store(item) {
    localStorage.setItem("toDoList", JSON.stringify(item));
};

export function loadList(list) {
    let updatedlist = JSON.parse(localStorage.getItem("toDoList"));
    console.log("loaded from storage:", updatedlist);
    list.splice(0, list.length);
    for (let item of updatedlist) {
        list.push(item);
    }
    console.log("returned from storage:", list);
    return list;
};