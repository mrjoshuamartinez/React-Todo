  // you will need a place to store your state in this component.
import React, { Component } from 'react';
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state.
import "./App.css";
class App extends Component {

  constructor() {
    super();
    this.state = {
      title: "Welcome to your Todo App!",
      currentToDoItem: null,
      toDoList: [],
      strikeThrough: []
    };
  }

    setCurrentToDoItem = toDoItem => {
      this.setState({currentToDoItem: toDoItem});
  };
  saveToDoListItem = e => {
    this.setState({toDoList: [...this.state.toDoList, e] });
    console.log(this.state.toDoList);
  };
  crossLine = e => {
      const element = e.target;
      element.classList.toggle("crossed-line");
  };

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {this.state.toDoList.map((toDoItem, id) => (
          <h3 key={id}>
            <div key={id} onClick={this.crossLine}>
              {toDoItem}
            </div>
          </h3>
        ))}
        <input type="text" placeholder="To do item..." onChange={e => this.setCurrentToDoItem(e.target.value)} />
        <button onClick={() => this.saveToDoListItem(this.state.currentToDoItem)}>Add to List</button>
        <button>Remove Completed</button>
      </div>
    );
  };
};
export default App;