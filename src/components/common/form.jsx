import React, { Component } from "react";

class Form extends React.Component {
  renderInput = (label, name) => {
    const { data } = this.props;
    return (
      <div>
        <div class="form-group row">
          <label for={name} class="col-sm-2 col-form-label">
            {label}
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext border-bottom"
              id={name}
              placeholder={`Enter ${label}`}
              onInput={this.handleInput}
              value={data[`${name}`]}
            />
          </div>
        </div>
      </div>
    );
  };

  handleInput = () => {
    console.log("Input");
  };

  renderButton = () => {
    const { id, onDelete } = this.props;
    return (
      <button
        className="btn btn-warning col-1 pr-0"
        onClick={() => onDelete(id)}
      >
        <i className="fa fa-trash"></i>
      </button>
    );
  };

  render() {
    return (
      <div className="container border col-10 m-4">
        <div className="d-flex flex-row col-15">
          <div className="col-11">
            {this.renderInput("Title", "title")}
            {this.renderInput("Url", "url")}
          </div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default Form;
