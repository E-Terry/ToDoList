import React from "react";
import Title from "./Title";
// import Form from "./Form"
// import Task from "./Task";
import Tasks from "./Tasks";
import FormAndTable from "./FormAndTable";
import Task from "./Task";

var ThingsToDo = [];

class ToDoList extends React.Component {

    render() {
        var saved = JSON.parse(localStorage.getItem("tasks"));
        // console.log("fetching value:", saved)
        if(saved != null)
        {
            ThingsToDo = saved;
            // console.log("set previous value");
        } 
        // else console.log("previous value null");
        return (
            <div className="ToDoList">
                <header><div id="Title"><Title /></div></header>
                <FormAndTable />
            </div>
        );
}
static getTasks() {
    ThingsToDo = ThingsToDo.sort((a,b) => a.value - b.value);
    return ThingsToDo;
}
}
export function appendTask(task) {
    // console.log(task);
    
        ThingsToDo.push(task);
    
    // console.log(ThingsToDo);
    // console.log(ThingsToDo[0].title);

    Tasks.updateTable();
}
export function removeTask(title) {
    ThingsToDo = ThingsToDo.filter(a => a.title.toString()!==title);
    Tasks.updateTable();
}
export function toggleCanDo(title) {
    for(var i = 0; i < ThingsToDo.length; i++) {
        var a = ThingsToDo[i];
        if(a.title.toString()===title) {
            console.log(a.canDo, a.title)
            ThingsToDo[i] = new Task(a.title, a.time, a.difficulty, a.importance, new Date(a.date).toLocaleString("en-US", {timeZone: "UTC", dateStyle: "full"}), (a.canDo === 'true') ? 'false' : 'true');
            console.log(a.canDo, a.title)
        }
    }
}

// export function setTasks(thingsToDo) {
//     ThingsToDo = thingsToDo;
//     Tasks.updateTable();
// }
export default ToDoList;

