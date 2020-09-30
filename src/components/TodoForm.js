import React, {Component} from "react";

class ToDoForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = (e) => {
    this.setState({ ...this.state, newTask: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ ...this.state, newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="task"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;
