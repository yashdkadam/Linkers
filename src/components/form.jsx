import React, { Component } from "react";
import Input from "./common/input";

class Form extends React.Component {
  renderInput(label, name) {
    return <Input label={label} name={name} />;
  }
  render() {
    return <div></div>;
  }
}

export default Form;
