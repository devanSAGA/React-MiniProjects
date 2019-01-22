import React from "react";
import "../styles/Controller.css";

const Controller = props => {
  return (
    <div className="control-buttons">
      <button className="button" onClick={props.fetchGIFs}>
        Load GIFs
      </button>
      <button className="button" onClick={props.reverseOrder}>
        Reverse Order
      </button>
      <button className="button" onClick={props.randomizeOrder}>
        Randomize Order
      </button>
      <button className="button" onClick={props.clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Controller;
