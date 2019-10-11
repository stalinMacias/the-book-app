import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import RegisterForm from "./components/registerForm";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <RegisterForm></RegisterForm>
      </React.Fragment>
    );
  }
}

export default App;
