import React, {Component} from 'react';
import TaskForm from './components/TaskForm.js';
import Task from './components/Task.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
    this.handleCallback = this.handleCallback.bind(this);
    this.taskChange = this.taskChange.bind(this);
  }
  handleCallback(obj) {
    //Gets a todo object
    //Adds the todo object to the list
    //Render the todo list with list rendering
    this.state.todoList.push(obj);
    this.setState({todoList: this.state.todoList});
  }

  taskChange(obj) {
    alert(obj.text)
    alert(this.state.todoList.length);
  
    let copy = [];
    for (var i = 0; i < this.state.todoList.length; i++) {
      let copyObj = this.state.todoList[i]
      alert(copyObj.taskName)
      if (copyObj.id === obj.id) {
        copyObj.taskName = obj.text;
      }
      copy.push(copyObj);
    }
    this.setState({todoList: copy});

  }

  render() {
    const todoItems = this.state.todoList.map((todo) =>
    <Task handleTaskChange={this.taskChange} todoObj={todo}/>
    );
      return (
      <div class="col">
          <h1>The Task List</h1>
          <ul>
            {todoItems}
          </ul>
          <TaskForm parentCallback={this.handleCallback}/>
      </div>
    );
  }
}

export default App;
