import ToDoList from "./ToDoList";
import React from "react";
import "./Tasks.css"

class Tasks extends React.Component {
    render() {
        return (
            <table id="taskTable">
                <thead><tr><th>Title</th><th>Time</th><th>Difficulty</th><th>Importance</th><th>Date</th><th>Score</th></tr></thead>
                <tbody id="dataDeLaTable" />
                
                
            </table>
        );
    }

    static updateTable() {
        this.tableData = ""
        var b = "</td><td>"
        ToDoList.getTasks().forEach(a => {
            this.tableData += "<tr><td>"+ a.title + b + a.time + b + a.difficulty + b + a.importance + b + new Date(a.date).toLocaleString("en-US", {timeZone: "UTC", dateStyle: "full"}) + b + calcScore(a.time, a.difficulty, a.importance, a.date) + "</td></tr>";
        });
        document.getElementById("dataDeLaTable").innerHTML = this.tableData;
        console.log(this.tableData);
    }

    
}

function calcScore(time, difficulty, importance, date) {
    // console.log(time, difficulty, importance, date, new Date().getTime(), (date - new Date().getTime()))
    return (1.0/time) + (1.0/difficulty) + importance - ((date - (new Date().getTime()))/(1000*60*60*24));
}
 

export default Tasks;