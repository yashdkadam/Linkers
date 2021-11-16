import React, { Component } from "react";
import LinkForm from "./linkFom";

class Control extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-7 m-2">
          <h1>Links</h1>
          <div className="col-5 m-2">
            <button className="btn btn-primary btn-block" type="button">
              Add Links
            </button>
          </div>
          <div className="container">
            <LinkForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
