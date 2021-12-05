import React, { Component } from "react";
import Container from "./components/container";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import VerticalNav from "./components/verticalNav";
import Display from "./components/display";
import { Redirect, Switch, Route } from "react-router-dom";
import { getLinks, getProfile } from "./services/linkService";
import "./App.css";

class App extends Component {
  state = { data: [], profile: [], condition: true, mobileView: "true" };

  async componentDidMount() {
    const { data: profile } = await getProfile();
    const { data } = await getLinks();
    this.setState({ profile, data });
  }

  changeCondition = async () => {
    const { condition: check } = this.state;
    const condition = check === true ? false : true;
    this.setState({ condition });
  };
  updateProfileData = async () => {
    const { data: profile } = await getProfile();
    const { data } = await getLinks();
    this.setState({ profile, data });
  };

  handleMobileView = () => {
    const { mobileView: check } = this.state;
    const mobileView = check === "" ? true : "";
    this.setState({ mobileView });
  };

  render() {
    const { mobileView } = this.state;
    return (
      <React.Fragment>
        {mobileView && <NavBar />}
        <div className="d-flex align-items-start flex-row">
          {mobileView && <VerticalNav changeCondition={this.changeCondition} />}
          <Switch>
            <Route
              path="/links"
              render={(props) => (
                <Container
                  {...props}
                  condition={this.state.condition}
                  changeCondition={this.changeCondition}
                  updateProfileData={this.updateProfileData}
                  profile={this.state.profile}
                />
              )}
            />
            <Route
              path="/display"
              render={(props) => (
                <Display
                  {...props}
                  profile={this.state.profile}
                  data={this.state.data}
                  handleMobileView={this.handleMobileView}
                />
              )}
            />

            <Route path="/display" component={Display} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/links" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
