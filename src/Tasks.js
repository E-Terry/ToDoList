import ToDoList from "./ToDoList";
import React from "react";

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
            this.tableData += "<tr><td>"+ a.title + b + a.time + b + a.difficulty + b + a.importance + b + new Date(a.date).toLocaleString("en-US", {timeZone: "UTC", dateStyle: "full"}) + b + a.value + "</td></tr>";
        });
        document.getElementById("dataDeLaTable").innerHTML = this.tableData;
        // console.log(this.tableData);
        var table = document.getElementById('taskTable');
        var tbody = table.getElementsByTagName('tbody')[0];
        var cells = tbody.getElementsByTagName('td');

        for (var i=5, len=cells.length; i<len; i += 6){
            var value = parseInt(cells[i].innerHTML,10);
            console.log(value);
            var color = '';
            if(value > 8) color = 'red';
            else if(value > 6) color = 'orange';
            else if(value > 3) color = 'yellow';
            else color = 'green';
            cells[i].style.backgroundColor = color;
   
        }
    }

    
}


 

export default Tasks;