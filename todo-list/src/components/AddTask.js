import React from "react";

import "../styles/AddTask.css";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      error: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newTask: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newTask } = this.state;
    const error = this.props.handleAddTask(newTask);

    if (!error) {
      this.setState({ newTask: "" });
    } else {
      this.setState({ error });
    }
  }

  render() {
    return (
      <form className="addtask-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="addtask-input"
          onChange={this.handleChange}
          value={this.state.newTask}
          placeholder="Add Task Here..."
        />
        <button
          className="addtask-button"
          onClick={this.props.handleAddItem}
          disabled={!this.state.newTask.length}
        >
          +
        </button>
      </form>
    );
  }
}
export default AddItem;
