import React, { Component } from "react";
import Control from "./control";
import Panel from "./Panel";
import { getLinks, deleteTab } from "./../services/linkService";

class Container extends React.Component {
  state = {
    count: 0,
    data: [],
  };

  async componentDidMount() {
    const { data } = await getLinks();
    console.log(data);
    this.setState({ data });
  }

  onDelete = (id) => {
    const originalLinks = this.state.data;
    var data = [];
    for (let index in originalLinks) {
      if (index === id) continue;
      else data.push(originalLinks[index]);
    }

    try {
      deleteTab(id);
    } catch (ex) {
      this.setState({ originalLinks });
    }
    this.setState({ data });
  };

  increamentCount = () => {
    let count = this.state.count + 1;
    const addedData = {
      title: "",
      url: "",
    };
    const data = [...this.state.data, addedData];
    console.log(data);
    this.setState({ count, data });
  };

  render() {
    const { data, count } = this.state;
    console.log(data);
    return (
      <div className="overflow hidden">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <a class="navbar-brand" href="#">
            Links
          </a>
        </nav>
        <div className="d-flex align-items-start flex-row m-0">
          <nav class="navbar navbar-expand-lg navbar-light bg-light vertical">
            <a class="navbar-brand" href="#"></a>
          </nav>
          <Control
            addForm={this.addForm}
            increamentCount={this.increamentCount}
            count={count}
            data={data}
            onDelete={this.onDelete}
          />
          <Panel addForm={this.addForm} data={data} count={count} />
        </div>
      </div>
    );
  }
}

export default Container;
