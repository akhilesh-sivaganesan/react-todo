import React, {Component} from 'react';

var taskID = 0;

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //If valid input then
        taskID++;
        const taskObj = {
            taskName: this.state.value,
            done: false,
            id: taskID
        }
        this.props.parentCallback(taskObj);
        document.getElementById("taskInput").value = '';
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> To Do:
                    <input id="taskInput" type="text" placeholder="Enter Task" defaultValue={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            
        )
    }
}

export default TaskForm;