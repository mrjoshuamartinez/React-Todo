// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from "./Todo";

const ToDoList = (props) => {

  return (
    <div>
      <div className="task-list">
        {props.task.map((task) => (
          <ToDo key={task.id} task={task} toggleTask={props.toggleTask} />
        ))}
      </div>
      <div className="clear-btn-wrap">
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default ToDoList;