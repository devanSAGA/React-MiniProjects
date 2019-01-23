import React from "react";
import NavigationButtons from "./NavigationButtons";

const ConfirmDetails = props => {
  return (
    <div className="form-container">
      <h3 style={{ textAlign: "center" }}>Please confirm your details</h3>
      {Object.keys(props.values).map((label, index) => {
        return (
          <div className="form-details" key={index} style={{ margin: "5px" }}>
            <span style={{ fontSize: "15px" }}>{label.toUpperCase()}: </span>
            <strong>{" " + props.values[label]}</strong>
          </div>
        );
      })}
      <NavigationButtons
        nextButtonText={"Confirm"}
        backButtonText={"Back"}
        nextStep={props.nextStep}
        prevStep={props.prevStep}
      />
    </div>
  );
};

export default ConfirmDetails;
