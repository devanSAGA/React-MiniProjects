import React from "react";

import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";
import ConfirmDetails from "./ConfirmDetails";
import SuccessMessage from "./SuccessMessage";

import "../styles/_common.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      yearOfBirth: "",
      city: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  nextStep() {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }

  prevStep() {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  }

  handleChange(input) {
    return function(event) {
      this.setState({ [input]: event.target.value });
    }.bind(this);
  }

  render() {
    const { firstName, lastName, yearOfBirth, city } = this.state;
    const values = { firstName, lastName, yearOfBirth, city };
    switch (this.state.step) {
      case 1:
        return (
          <FormPageOne
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPageTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <SuccessMessage />;
    }
  }
}

export default Form;
