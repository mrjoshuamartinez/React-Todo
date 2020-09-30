  // you will need a place to store your state in this component.
import React, { Component } from 'react';
//Component Imports
import ListForm from './components/TodoForm';
import ToDoList from './components/TodoList';
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state.
import "./App.css";

const task = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      task,
      isDialogVisible: false
    };
  }

  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText){
    console.log("sendInput (DialogInput#1): "+inputText);
  }
  toggleTask = (taskId) => {
    this.setState({
      task: this.state.task.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      task: [...this.state.task, newTask]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      task: this.state.task.filter((task) => !task.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>To Do List</h2>
          <ListForm addTask={this.addTask} />
        </div>
        <ToDoList
          toggleTask={this.toggleTask}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;