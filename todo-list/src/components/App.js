import React from "react";

import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleDeleteAllTask = this.handleDeleteAllTask.bind(this);
  }

  handleAddTask(task) {
    if (!task.trim()) {
      return "Enter Valid String";
    } else if (this.state.tasks.indexOf(task.trim()) > -1) {
      return "This Value Already Exists In The List";
    }
    this.setState(prevState => ({ tasks: prevState.tasks.concat([task]) }));
  }

  handleDeleteTask(task) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(singleTask => singleTask !== task)
    }));
  }

  handleDeleteAllTask() {
    this.setState({ tasks: [] });
  }

  render() {
    return (
      <div className="todo-container">
        <Header />
        <AddTask handleAddTask={this.handleAddTask} />
        <TaskList
          handleDeleteTask={this.handleDeleteTask}
          handleDeleteAllTask={this.handleDeleteAllTask}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
