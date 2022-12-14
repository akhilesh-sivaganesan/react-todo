import React, {Component} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "../App.css"
class Task extends Component {
    constructor(props) {
        super(props);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDeletion = this.handleDeletion.bind(this);
    }
    handleTaskChange(event) {
        //alert(event.target.value)
        const obj = {text: event.target.value, id: this.props.todoObj.id}
        this.props.handleTaskChange(obj);
    }

    handleStatusChange(event) {
        //var field = document.getElementById("standard-basic")
        //field.classList.toggle("complete");
        this.props.handleStatusChange(this.props.todoObj.id);
        //field.disabled = this.props.todoObj.done;
    }
    handleDeletion(event) {
        this.props.handleDeletion(this.props.todoObj.id);
    }
    render() {
        return (
            <div class="task">
                <Checkbox color="success" onClick={this.handleStatusChange}/>
                <TextField id={this.props.todoObj.id} label="Task" variant="standard" defaultValue={this.props.todoObj.taskName} onChange={this.handleTaskChange}/>
                <Button color="error" onClick={this.handleDeletion}>Delete</Button>
            </div>
        );
    }
}
export default Task;