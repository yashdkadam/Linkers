import React, { Component } from "react";

class LinkGroup extends React.Component {
  renderTabs(label, url) {
    return (
      <a
        className="btn btn-primary btn-block mt-2"
        type="button"
        href={url}
        target="_blank"
      >
        {label}
      </a>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="btn-group-vertical container ">
        {this.renderTabs(data["title"], data["url"])}
      </div>
    );
  }
}

export default LinkGroup;
