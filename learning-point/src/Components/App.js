import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "./Errors";
import { Courses, RegLogWrap, Home, ChatScreen, Kanban } from "./PageComponent";
import UserInterfaceLayouts from "./Layouts/UserInterfaceLayout";

export default class App extends Component {
  state = {
    auth: true
  };

  handleLogin = () => {
    this.setState({ auth: true });
  };

  handleLogout = () => {
    this.setState({ auth: false });
  };

  render() {
    const { auth } = this.state;
    return (
      <div>
        {auth ? (
          <div>
            <BrowserRouter>
              <UserInterfaceLayouts logout={this.handleLogout}>
                <Switch>
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/curriculum" render={() => <Courses />} />
                  <Route path="/404" render={() => <NotFound />} />
                  <Route path="/chatroom" render={() => <ChatScreen />} />
                  <Route path="/kanban" render={() => <Kanban />} />
                </Switch>
              </UserInterfaceLayouts>
            </BrowserRouter>
          </div>
        ) : (
          <RegLogWrap login={this.handleLogin} />
        )}
      </div>
    );
  }
}
