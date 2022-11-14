import React, {Component} from 'react';
class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Here is a todo id: {this.props.todoObj.id}</p>
                <p>Here is a todo name: {this.props.todoObj.taskName}</p>
                <p>Here is a todo status: {this.props.todoObj.done}</p>
            </div>
        );
    }
}
export default Task;