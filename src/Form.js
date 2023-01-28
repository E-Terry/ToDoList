import React from "react"
import {appendTask} from "./ToDoList";
import Task from "./Task"
import { removeTask } from "./ToDoList";

class Form extends React.Component {

    render() {
        return (
        <div>
            <h2> Create New Task</h2> <br />
            <form className="Form">
                <label htmlFor="titleForm"> Title: </label>
                <input type="text" id="titleForm" name="titleForm" placeholder={"Input Title Here"}  size={"12"} required={true} autoFocus/><br></br>

                <label htmlFor="time"> Time (in minutes): </label>
                <input className="numberInput" type="number" id="time" name="time" size='3'/><br></br>

                <label htmlFor="difficulty"> Difficulty (1-10, 1 easiest): </label>
                <input className="numberInput" type="number" id="difficulty" name="difficulty" min="1" max="10" size='3'/><br></br>

                <label htmlFor="importance"> Importance (1-10, 1 importantest): </label>
                <input className="numberInput" type="number" id="importance" name="importance" min="1" max="10" size='3'/><br></br>

                <label htmlFor="dateForm"> Date Due: </label>
                <input type="date" id="dateForm" name="dateForm" size={"12"}/><br></br>

                <input type="button" value={"Submit"} onClick={Calculate}/>
                <input type="reset"/>
            </form>
            <h2> Remove Task by Title </h2><br />
            <form className="Form"> 
                <label htmlFor="removeTitle">Title: </label>
                <input type={"text"} id="removeTitle" /><br />
                <input type="button" value={"Remove"} onClick={remove}/>
            </form>
        </div>
        );
}


}

function Calculate(){
    console.log("I got your cliiiick!");
    appendTask( new Task(
    // console.log(
        document.getElementById("titleForm").value.toString(),
        document.getElementById("time").value.toString(),
        document.getElementById("difficulty").value.toString(),
        document.getElementById("importance").value.toString(),
        document.getElementById("dateForm").value.toString()
        // );
        // )
        ));
}

function remove() {
    removeTask(document.getElementById("removeTitle").value.toString())
}

export default Form;
