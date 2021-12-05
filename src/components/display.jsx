import React, { Component } from "react";
import LinkGroup from "./linkGroup";

class Panel extends React.Component {
  componentDidMount() {
    const { handleMobileView } = this.props;
    handleMobileView();
  }

  addForm = () => {
    const { data } = this.props;
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
      <div className="text-center text-light">
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
      <div className="bg-secondary container-fluid vh-100 d-inline-block">
        {this.renderImg()}
        {this.renderTitle()}
        <div className="container col-7">{this.addForm()}</div>
      </div>
    );
  }
}

export default Panel;