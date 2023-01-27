import React from "react";
import './ToDoList.css';
import Title from "./Title";
import Form from "./Form"
import Task from "./Task";
import Tasks from "./Tasks";
import FormAndTable from "./FormAndTable";

var ThingsToDo = [];

class ToDoList extends React.Component {

    render() {
        return (
            <div className="ToDoList">
                <div id="Title"><Title /></div><br></br>
                <FormAndTable />
                
            </div>
        );
}
static getTasks() {
    return ThingsToDo;
}
}
export function appendTask(task) {
    console.log(task);
    ThingsToDo.push(task);
    console.log(ThingsToDo);
    console.log(ThingsToDo[0].title);

    Tasks.updateTable();
}

export default ToDoList;

