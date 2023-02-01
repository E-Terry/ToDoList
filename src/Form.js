import React from "react"
import ToDoList, {appendTask} from "./ToDoList";
import Task from "./Task"
import { removeTask } from "./ToDoList";

export var errorMessage = false;
class Form extends React.Component {
    
    
      onChangeValue(event) {
        console.log(event.target.value);
      }

    render() {
        return (
        <div>
            <h2> Create New Task</h2> <br />
            <form id="form" className="Form">
                <div className="formLabels">
                <label htmlFor="titleForm"> Title: </label><br></br>
                <label htmlFor="time"> Time (mins): </label><br></br>
                <label htmlFor="difficulty"> Difficulty (1 easy-10): </label><br></br>
                <label htmlFor="importance"> Importance (1 more-10): </label><br></br>
                <label htmlFor="dateForm"> Date Due: </label><br></br>
                <label htmlFor="canDoForm"> Can Do?: </label>

                </div>

                <div className="formBoxes">
                <input type="text" id="titleForm" name="titleForm" placeholder={"Input Title Here"} required={true} autoFocus size='12'/><br></br>
                <input className="numberInput" type="number" id="time" name="time" size='12'required={true}/><br></br>
                <input className="numberInput" type="number" id="difficulty" name="difficulty" min="1" max="10" required={true}size='12'/><br></br>
                <input className="numberInput" type="number" id="importance" name="importance" min="1" max="10" required={true}size='12'/><br></br>
                <input type="date" id="dateForm" name="dateForm" /><br></br>
                <input type="checkbox" id="canDoForm" name="canDo"/><br/>
                <input type="button" value={"Submit"} onClick={Calculate}/>
                <input type="reset"/>
                </div>
            </form>
            <p id="error" className="errorMessage" color="red"></p>
            <h2> Remove Task by Title </h2><br />
            <div className="remove">
                <form className="Form"> 
                    <label htmlFor="removeTitle">Title: </label>
                    <input type={"text"} id="removeTitle" /><br />
                    <input type="button" value={"Remove"} onClick={remove}/>
                </form>
            </div>
            
        </div>
        );
}


}

function Calculate(){
    console.log("I got your cliiiick!");
    var titleBox = document.getElementById("titleForm"),
        timeBox = document.getElementById("time"),
        difficultyBox = document.getElementById("difficulty"),
        importanceBox = document.getElementById("importance"),
        dateBox = document.getElementById("dateForm"),
        canDoBox = document.getElementById("canDoForm");

    var title = titleBox.value.toString(), 
        time = timeBox.value.toString(),
        difficulty = difficultyBox.value.toString(),
        importance = importanceBox.value.toString(),
        date = dateBox.value.toString(),
        canDo = canDoBox.checked.toString();

        // console.log(canDo, canDo.toString(), canDo === 'true');

    if(title !== "" && time !== "" && difficulty !== "" && importance !== "" && date !== "") {
        var exists = false;
        ToDoList.getTasks().forEach(a => {
            exists = exists ? true : (a.title === title);
            // console.log(a.title, title, a.title === title);
            });
            
        if(!exists)
        {
            appendTask( new Task(
                title, time, difficulty, importance, date, canDo
                ));
            if(errorMessage) {
                document.getElementById("error").innerText = "";
                errorMessage = false;
            }
        } else {
            document.getElementById("error").innerText = "Please input a name that is not already used";
            errorMessage = true;
        }
        
        
        document.getElementById("form").reset();
        
        
    } else {
        document.getElementById("error").innerText = "Please input acceptable values for each input";
        errorMessage = true;
    }
}

function remove() {
    removeTask(document.getElementById("removeTitle").value.toString())
}

export default Form;
