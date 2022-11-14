import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css"
class Task extends Component {
    constructor(props) {
        super(props);
        this.handleTaskChange = this.handleTaskChange.bind(this);
    }
    handleTaskChange(event) {
        //alert(event.target.value)
        const obj = {text: event.target.value, id: this.props.todoObj.id}
        this.props.handleTaskChange(obj);
    }
    render() {
        return (
            <div class="task">
                <p>Here is a todo name: {this.props.todoObj.taskName}</p>
                <p>Here is a todo status: {this.props.todoObj.done}</p>
                <TextField id="standard-basic" label="Standard" variant="standard" defaultValue={this.props.todoObj.taskName} onChange={this.handleTaskChange}/>
                <Button>hi</Button>
            </div>
        );
    }
}
export default Task;