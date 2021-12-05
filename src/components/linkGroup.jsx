import React, { Component } from "react";

class LinkGroup extends Component {
  renderTabs(label, url) {
    return (
      <a
        className="col-2 btn btn-light btn-block mt-2 text-wrap"
        type="button"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="btn-group-vertical container mt-0">
        {data["title"] && this.renderTabs(data["title"], data["url"])}
      </div>
    );
  }
}

export default LinkGroup;
