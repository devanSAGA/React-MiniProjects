import React from "react";
import NavigationButtons from "./NavigationButtons";

const FormPageTwo = props => {
  return (
    <div className="form-container">
      <input
        type="text"
        value={props.values.yearOfBirth}
        placeholder="Year Of Birth"
        onChange={props.handleChange("yearOfBirth")}
      />
      <input
        type="text"
        value={props.values.city}
        placeholder="City"
        onChange={props.handleChange("city")}
      />
      <NavigationButtons nextStep={props.nextStep} prevStep={props.prevStep} />
    </div>
  );
};

export default FormPageTwo;
