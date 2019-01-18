import React from "react";

import "../styles/Task.css";

const Task = props => {
  return (
    <div className="task-element">
      <div className="task-text">{props.taskText}</div>
      <button
        className="remove-task-button"
        onClick={() => {
          props.handleDeleteTask(props.taskText);
        }}
      >
        x
      </button>
    </div>
  );
};

export default Task;
