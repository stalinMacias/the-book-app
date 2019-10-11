import { Component } from "react";
import { toast } from "react-toastify";

import validations from "../../services/validations/validationsRegisterForm";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  //This method will validate individually each property of the data object in the state object, and will show an error message in each prop that generates one!
  validate = () => {
    const { data } = this.state;
    const { errors } = this.state;
    for (let key in data) {
      const error = validations.validations(key, data[key]);
      if (error) errors[key] = error;
    }
    if (Object.getOwnPropertyNames(errors).length !== 0) {
      this.setState({ errors });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.validate())
      toast.error("The form can not be submitted, there is at least one error");
    //if there wasn't any error, call the doSubmit() method of the current form that is inherit from this one!
    else this.doSubmit();
  };

  handleOnChange = e => {
    //Destructuring the property currentTarget!
    const { currentTarget: input } = e;

    //Code to throw the errors
    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    //if an error was returned from the validateProperty method, add it to the errors object and when the state it'll be updated, also update the errors propery!
    if (error) errors[input.name] = error;
    //This statement it's useful because if an error was thrown previously and in the current re-render it's solved, the error message will be removed in this re-render!
    else delete errors[input.name];

    //Despite if an error was thrown or not, the form element has to be updated, because the user has to see in screen what it's typing!
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  //This method receives the name's and value's property! This method will use a service call "validations", this service will encapsulate all validation's logic!
  validateProperty = ({ name, value }) => {
    const valProp = validations.validations(name, value);
    if (valProp !== "") return valProp;
  };
}

export default Form;
