import React, {Component} from "react";
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTask: "",
      visible: false
    };
  }

  handleChanges = (e) => {
    this.setState({ ...this.state, newTask: e.target.value });
  };
  onDismiss = () => this.setState({...this.state, visible: false});
  inputAlert = (e) => {
    this.setState({...this.state, visible: e});
  }
  submitTask = (e) => {
    e.preventDefault();
    if (!this.state.newTask.trim()) {
      this.inputAlert(!this.state.visible);
      return;
    }
    this.props.addTask(this.state.newTask);
    this.setState({ ...this.state, newTask: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitTask}>
          <input
            id="input"
            type="text"
            name="task"
            value={this.state.newTask}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
        <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss}>
          Add a Task
        </Alert>
      </>
    );
  }
}

export default ToDoForm;
