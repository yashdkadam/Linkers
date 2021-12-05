import React, { Component } from "react";
import { updateTab } from "../../services/linkService";
class Form extends Component {
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
              onBlur={(e) => this.handleInput(e, name)}
              defaultValue={data[name]}
            />
          </div>
        </div>
      </div>
    );
  };

  handleInput = (e, name) => {
    const { data, updateData } = this.props;
    console.log(data.id);
    const res = updateTab(data.id, name, e.target.value);
    console.log(res);
    updateData();
  };

  renderButton = () => {
    const { data, onDelete } = this.props;
    return (
      <button
        className="btn btn-warning col-1 pr-0"
        onClick={() => onDelete(data["id"])}
      >
        <i className="fa fa-minus"></i>
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
