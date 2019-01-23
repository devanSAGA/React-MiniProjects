import React from "react";

import "../styles/NavigationButtons.css";

const NavigationButtons = props => {
  return (
    <div className="buttons-container">
      <button
        className="next-button"
        onClick={event => {
          event.preventDefault();
          props.nextStep();
        }}
      >
        {props.nextButtonText || "Next"}
      </button>
      <button
        className="prev-button"
        onClick={event => {
          event.preventDefault();
          props.prevStep();
        }}
      >
        {props.prevButtonText || "Back"}
      </button>
    </div>
  );
};
export default NavigationButtons;
