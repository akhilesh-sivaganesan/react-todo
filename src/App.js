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
  }
  handleCallback(obj) {
    //Gets a todo object
    //Adds the todo object to the list
    //Render the todo list with list rendering
    this.state.todoList.push(obj);
    this.setState({todoList: this.state.todoList});
  }

  render() {
    const todoItems = this.state.todoList.map((todo) =>
    <Task todoObj={todo}/>
    );
      return (
      <div>
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
