import React, {Component} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

var taskID = 0;

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //If valid input then
        if (this.state.value === "") {
            this.setState({error: true})
            this.setState({errorMessage: "Enter valid task"})
            event.preventDefault();
            return;
        }
        taskID++;
        const taskObj = {
            taskName: this.state.value,
            done: false,
            id: taskID
        }
        this.props.parentCallback(taskObj);

        this.setState({error: false});
        this.setState({value: ""});
        this.setState({errorMessage: ""});

        document.getElementById("taskInput").value = '';
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <form class="row" onSubmit={this.handleSubmit}>
                    <TextField helperText={this.state.errorMessage} error={this.state.error} id="taskInput" type="text" placeholder="Enter Task" defaultValue={this.state.value} onChange={this.handleChange} />
                    <Button type="submit" value="Submit">Submit</Button>
                </form>
            </div>
            
        )
    }
}

export default TaskForm;