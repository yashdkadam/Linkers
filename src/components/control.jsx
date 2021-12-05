import React, { Component } from "react";
import Form from "./common/form";
import Profile from "./profile";
class Control extends Component {
  addForm = () => {
    const { data, onDelete, updateData } = this.props;
    let forms = [];
    for (let keys in data) {
      data[keys]["id"] = keys;
      forms.push(
        <Form
          data={data[keys]}
          onDelete={onDelete}
          key={keys}
          updateData={updateData}
        />
      );
    }
    console.log(forms);
    return forms;
  };

  conditionalRender = () => {
    const { profile, condition } = this.props;
    if (condition === true) {
      return (
        <div className="overflow auto scroll border-left border-right">
          <div className="col-19 m-0 height ml-5">
            <div className="col-5 m-2">
              <button
                className="col-12 btn btn-primary btn-block m-3"
                type="button"
                onClick={this.props.increamentCount}
              >
                Add Links
              </button>
            </div>
            {this.addForm()}
          </div>
        </div>
      );
    } else {
      return (
        <Profile
          profile={profile}
          updateProfileData={this.props.updateProfileData}
        />
      );
    }
  };

  render() {
    return this.conditionalRender();
  }
}

export default Control;
