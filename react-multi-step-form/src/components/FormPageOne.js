import React from "react";

import NavigationButtons from "./NavigationButtons";

const FormPageOne = props => {
  return (
    <div className="form-container">
      <input
        type="text"
        value={props.values.firstName}
        placeholder="Name"
        onChange={props.handleChange("firstName")}
      />
      <input
        type="text"
        value={props.values.lastName}
        placeholder="Surname"
        onChange={props.handleChange("lastName")}
      />
      <NavigationButtons nextStep={props.nextStep} prevStep={props.prevStep} />
    </div>
  );
};

export default FormPageOne;
