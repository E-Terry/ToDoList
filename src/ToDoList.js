import React from "react";
import './ToDoList.css';
import Title from "./Title";
import Form from "./Form"

var ThingsToDo = [];

class ToDoList extends React.Component {

    render() {
        return (
            <div className="ToDoList">
                <Title />
                <Form />
            </div>
        );
}
}

export default ToDoList;

function appendTask(task) {
    ThingsToDo.push(task);
}