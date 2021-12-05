import React, { Component } from "react";
import LinkGroup from "./linkGroup";

class Panel extends React.Component {
  addForm = () => {
    const { count, data } = this.props;
    let tabs = [];
    for (let keys in data) {
      tabs.push(<LinkGroup data={data[keys]} id={keys} />);
    }
    console.log(tabs);
    return tabs;
  };

  renderImg = () => {
    return (
      <img
        src="https:randomuser.me/api/portraits/men/1.jpg"
        className="rounded-circle mx-auto d-block imgSize mt-2"
      />
    );
  };

  renderTitle = () => {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div className="text-center text-light container">
        <p>
          {profile.title}
          <br></br>
          {profile.bio}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="box mt-4 ml-2 overflow hidden bg-secondary">
        {this.renderImg()}
        {this.renderTitle()}
        {this.addForm()}
      </div>
    );
  }
}

export default Panel;
