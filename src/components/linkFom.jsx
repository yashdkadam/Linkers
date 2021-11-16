import React, { Component } from "react";
import Form from "./form";

class LinkForm extends Form {
  render() {
    this.renderInput("Title", "title");
    return <div></div>;
  }
}

export default LinkForm;
