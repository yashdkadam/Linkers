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

  render() {
    return <div className="box mt-4 overflow hidden">{this.addForm()}</div>;
  }
}

export default Panel;
