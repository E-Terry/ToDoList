import "./FormAndTable.css";
import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
class FormAndTable extends React.Component {
    render() {
        return (
            <div className="Display">
                <div className="formDisplay"><Form /></div>
                <div className="tableDisplay"><Tasks/></div>
            </div>
        );
    }
        
}
export default FormAndTable;