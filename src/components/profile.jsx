import React, { Component } from "react";
import { updateProfile } from "../services/linkService";

class Profile extends Component {
  state = {
    profile: [],
  };

  renderImg = () => {
    return (
      <img
        src="https:randomuser.me/api/portraits/men/1.jpg"
        className="rounded-circle mx-auto d-block"
        alt="..."
      />
    );
  };

  renderForm = async () => {
    const { profile } = this.props;
    console.log(profile["title"]);
    return null;
  };

  renderTextarea = () => {
    const { profile } = this.props;
    console.log(profile["title"]);

    return null;
  };

  handleInput = (name, e) => {
    const { updateProfileData } = this.props;
    const res = updateProfile(name, e.target.value);
    console.log(res);
    updateProfileData();
  };

  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div className="overflow auto scroll border-left border-right">
        <div className="col-25 m-0 height ml-5">
          <div className="col-10 m-2 container">
            {this.renderImg()}
            <div className="container">
              <div class="form-group">
                <label for="title">Profile Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Enter title..."
                  onBlur={(e) => this.handleInput("title", e)}
                  defaultValue={profile["title"]}
                />
              </div>
              <div class="form-group mt-2">
                <label for="bio">Bio</label>
                <textarea
                  class="form-control"
                  id="bio"
                  rows="3"
                  onBlur={(e) => this.handleInput("bio", e)}
                  placeholder="Enter Bio..."
                  defaultValue={profile["bio"]}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
