import React from "react";

import Task from "./Task";
import "../styles/TaskList.css";

const TaskList = props => {
  return (
    <div className="todo-list">
      <hr />
      <div className="widget-header">
        <h3 className="widget-header-title">Your To-dos</h3>
        <button
          className="widget-removeAll-button"
          onClick={props.handleDeleteAllTask}
        >
          Remove All
        </button>
      </div>
      {props.tasks.map((task, index) => {
        return (
          <Task
            key={task}
            taskText={task}
            count={index + 1}
            handleDeleteTask={props.handleDeleteTask}
          />
        );
      })}
      {props.tasks.length !== 0 && <hr />}
    </div>
  );
};

export default TaskList;
