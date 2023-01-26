import React from "react"
import "./Form.css"

class Form extends React.Component {

    render() {
        return (
            <form className="Form">
                <label htmlFor="titleForm"> Title: </label>
                <input type="text" id="titleForm" name="titleForm" placeholder={"Input Title Here"}  size={"12"} required={true} autoFocus/><br></br>
                <label htmlFor="dateForm"> Date: </label>
                <input type="date" id="dateForm" name="dateForm" size={"12"}/><br></br>
                <input type="submit" value={"Submit"} />
                <input type="reset"/>
            </form>
        );
}


}
export default Form;
