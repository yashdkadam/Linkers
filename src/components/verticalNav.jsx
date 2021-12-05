import React, { Component } from "react";
class VerticalNav extends Component {
  render() {
    const { changeCondition } = this.props;
    return (
      <div className="d-flex align-items-start flex-row m-0">
        <nav className="navbar bg-light vertical">
          <div onClick={changeCondition} className="clickable">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="rounded-circle imgHeight mb-3"
              alt="..."
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default VerticalNav;
