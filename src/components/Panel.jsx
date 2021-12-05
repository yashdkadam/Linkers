import React, { Component } from "react";
import LinkGroup from "./linkGroup";

class Panel extends Component {
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
        alt="..."
      />
    );
  };

  renderTitle = () => {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div className="text-center text-light container">
        <p className="mb-0">
          {profile.title}
          <br></br>
          {profile.bio}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="box mt-4 ml-2 example display bg-secondary">
        {this.renderImg()}
        {this.renderTitle()}
        {this.addForm()}
        <p className="mt-5 text-center text-light">Linkers</p>
      </div>
    );
  }
}

export default Panel;
