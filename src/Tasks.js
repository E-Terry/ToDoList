import ToDoList from "./ToDoList";
import React from "react";
import { toggleCanDo } from "./ToDoList";
import Task from "./Task";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
     }
    
     componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.handleLoad)  
     }
    
     handleLoad() {
        Tasks.updateTable();
     }
    //  const [getThingsToDo, setThingsToDo] = useStickyState('', 'thingsToDo');
    render() {
    return (
        <nav>
            <table id="taskTable">
                    <thead><tr><th>Title</th><th>Time</th><th>Difficulty</th><th>Importance</th><th>Date</th><th>Can Do?</th><th>Score</th></tr></thead>
                    <tbody id="dataDeLaTable" ></tbody>
            </table>
        </nav>

        );
    }



    static updateTable() {
        this.tableData = ""
        var b = "</td><td>"
        ToDoList.getTasks().forEach(a => {
            ToDoList.updateTimes();
            this.tableData += "<tr><td>"+ a.title + b
            + a.time + b
            + a.difficulty + b
            + a.importance + b
            + new Date(a.date).toLocaleString("en-US", {timeZone: "UTC", dateStyle: "full"}) + b
            + "<input type='checkbox'"  +"id='" + a.title + "' " + (a.canDo === 'true' ? "checked" : "") + "/> " + b + a.value
            +  "</td></tr>";
            // console.log(a.canDo.toString());
        });
        document.getElementById("dataDeLaTable").innerHTML = this.tableData;
        // console.log(this.tableData);
        var table = document.getElementById('taskTable');
        var tbody = table.getElementsByTagName('tbody')[0];
        var cells = tbody.getElementsByTagName('td');

        for (var i=6, len=cells.length; i<len; i += 7){
            var value = parseInt(cells[i].innerHTML,10);
            // console.log(value);
            var r = (value*255)/5 > 255 ? 255 : (value*255)/5;
            var g = ((10-value)*255)/5 > 255 ? 255 : ((10-value)*255)/5;
            var blue = 0;
            var color = 'rgb(' + r + ',' + g + ','+ blue + ')';
            
            cells[i].style.backgroundColor = color;
            // console.log(color);
   
        }

        localStorage.setItem("tasks", JSON.stringify(ToDoList.getTasks()))
        // console.log("Setting item:", JSON.stringify(ToDoList.getTasks()))
        ToDoList.getTasks().forEach(task => {
            document.getElementById(task.title).addEventListener('change', (e) => {
                toggleCheck(e.target.id);
                this.updateTable();
            })
        });
    }

    // function useStickyState(defaultValue, key) {
    //     const [value, setValue] = React.useState(() => {
    //       const stickyValue = window.localStorage.getItem(key);
    //       return stickyValue !== null
    //         ? JSON.parse(stickyValue)
    //         : defaultValue;
    //     });
    //     React.useEffect(() => {
    //       window.localStorage.setItem(key, JSON.stringify(value));
    //     }, [key, value]);
    //     return [value, setValue];
    //   }
}

function toggleCheck(name) {
    toggleCanDo(name);
}
export default Tasks;