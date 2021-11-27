import React, { Component } from "react";

class Input extends React.Component {
  state = {
    data: { title: "", url: "" },
  };
  render() {
    const { label, name, handleChange, data } = this.props;
    return null;
  }
}

export default Input;
