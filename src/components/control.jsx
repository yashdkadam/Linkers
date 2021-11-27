import React, { Component } from "react";
import Form from "./common/form";

class Control extends React.Component {
  addForm = () => {
    const { data, onDelete } = this.props;
    let forms = [];
    for (let keys in data) {
      forms.push(
        <Form data={data[keys]} key={keys} id={keys} onDelete={onDelete} />
      );
    }
    console.log(forms);
    return forms;
  };

  render() {
    const { increamentCount } = this.props;
    return (
      <div className="overflow auto scroll border-left border-right">
        <div className="col-19 m-0 height ml-5">
          <div className="col-5 m-2">
            <button
              className="btn btn-primary btn-block m-4"
              type="button"
              onClick={increamentCount}
            >
              Add Links
            </button>
          </div>
          {this.addForm()}
        </div>
      </div>
    );
  }
}

export default Control;
