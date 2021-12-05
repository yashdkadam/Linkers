import React, { Component } from "react";
import Control from "./control";
import Panel from "./Panel";
import VerticalNav from "./verticalNav";
import {
  getLinks,
  deleteTab,
  addTab,
  getProfile,
} from "./../services/linkService";
class Container extends React.Component {
  state = {
    count: 0,
    data: [],
  };

  async componentDidMount() {
    const { data } = await getLinks();
    let i = 0;
    for (let index in data) {
      data[index].id = index;
      i++;
    }
    console.log(data);
    this.setState({ data, count: i });
  }

  onDelete = async (id) => {
    let { count } = this.state;
    const originalLinks = this.state.data;
    const data = Object.values(originalLinks).filter((l) => l.id !== id);
    console.log(data);
    const res = await deleteTab(id);
    console.log(res);
    count--;

    this.setState({ data, count });
    this.updateData();
  };

  increamentCount = async () => {
    const originalData = this.state.data;
    const { count } = this.state;
    const { data } = await getLinks();
    const res = await addTab(count);
    console.log(res, data);

    this.setState({ data, count });
    this.updateData();
  };

  updateData = async () => {
    console.log("found");
    const { data } = await getLinks();
    this.setState({ data });
  };

  render() {
    const { data, count } = this.state;
    const { condition, profile, updateProfileData } = this.props;
    return (
      <div className="d-flex align-items-start flex-row m-0">
        <Control
          addForm={this.addForm}
          increamentCount={this.increamentCount}
          count={count}
          data={data}
          profile={profile}
          condition={condition}
          onDelete={this.onDelete}
          updateData={this.updateData}
          updateProfileData={updateProfileData}
          changeCondition={this.props.changeCondition}
        />
        <Panel
          addForm={this.addForm}
          data={data}
          count={count}
          profile={profile}
        />
      </div>
    );
  }
}

export default Container;
