import React, {Component} from 'react';
import TaskForm from './components/TaskForm.js';
import Task from './components/Task.js';
import Typography from "@mui/material/Typography";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
    this.handleCallback = this.handleCallback.bind(this);
    this.taskChange = this.taskChange.bind(this);
    this.statusChange = this.statusChange.bind(this);
    this.deletion = this.deletion.bind(this);
  }
  handleCallback(obj) {
    //Gets a todo object
    //Adds the todo object to the list
    //Render the todo list with list rendering
    this.state.todoList.push(obj);
    this.setState({todoList: this.state.todoList});
  }

  taskChange(obj) {
    let copy = [];
    for (var i = 0; i < this.state.todoList.length; i++) {
      let copyObj = this.state.todoList[i]
      if (copyObj.id === obj.id) {
        copyObj.taskName = obj.text;
      }
      copy.push(copyObj);
    }
    this.setState({todoList: copy});
  }

  statusChange(id) {
    let copy = [];
    for (var i = 0; i < this.state.todoList.length; i++) {
      let copyObj = this.state.todoList[i]
      if (copyObj.id === id) {
        copyObj.done = !copyObj.done;
      }
      copy.push(copyObj);
    }
    this.setState({todoList: copy});
  }

  deletion(id) {
    let copy = [];
    for (var i = 0; i < this.state.todoList.length; i++) {
      let copyObj = this.state.todoList[i]
      if (copyObj.id === id) {
        console.log(copyObj);
        continue;
      }
      copy.push(copyObj);
    }
    this.setState({todoList: copy});
  }

  render() {
    const todoItems = this.state.todoList.map((todo) =>
    <Task key={todo.id} handleTaskChange={this.taskChange} handleStatusChange={this.statusChange} handleDeletion={this.deletion} todoObj={todo}/>
    );
      return (
      <div class="col">
          <Typography variant="h2" component="h2">
            To Do List
          </Typography>;
          {todoItems}
          <TaskForm parentCallback={this.handleCallback}/>
      </div>
    );
  }
}

export default App;
