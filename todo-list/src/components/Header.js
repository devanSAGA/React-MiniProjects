import React from "react";

import "../styles/Header.css";

const Header = props => {
  return (
    <div className="todo-header">
      <h1 className="todo-title">{props.title}</h1>
      <h6 className="todo-subtitle">{props.subtitle}</h6>
    </div>
  );
};

Header.defaultProps = {
  title: "To-do List",
  subtitle: "Manage all your tasks here"
};

export default Header;
