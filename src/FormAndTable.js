import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
class FormAndTable extends React.Component {
    render() {
        return (
            <div className="Display">
                <div className="formDisplay"><Form /></div>
                <div className="tableDisplay"><Tasks/><sub>Lower score means do task sooner</sub></div>
            </div>
        );
    }
        
}
export default FormAndTable;