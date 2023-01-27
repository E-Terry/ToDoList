import React from "react"
import "./Form.css"
import {appendTask} from "./ToDoList";
import Task from "./Task"

class Form extends React.Component {

    render() {
        return (
            <form className="Form">
                <label htmlFor="titleForm"> Title: </label>
                <input type="text" id="titleForm" name="titleForm" placeholder={"Input Title Here"}  size={"12"} required={true} autoFocus/><br></br>

                <label htmlFor="time"> Time (in hours):</label>
                <input type="number" id="time" name="time"/><br></br>

                <label htmlFor="difficulty"> Difficulty (1-10):</label>
                <input type="number" id="difficulty" name="difficulty" min="1" max="10" /><br></br>

                <label htmlFor="importance"> Importance (1-10):</label>
                <input type="number" id="importance" name="importance" min="1" max="10" /><br></br>

                <label htmlFor="dateForm"> Date Due: </label>
                <input type="date" id="dateForm" name="dateForm" size={"12"}/><br></br>

                <input type="button" value={"Submit"} onClick={Calculate}/>
                <input type="reset"/>
            </form>
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

export default Form;
