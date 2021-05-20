import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/main/landing/landing";
import Login from "./pages/auth/login/Login";
import RecruiterProfile from "./pages/main/RecruiterProfile/RecruiterProfile";
import RecruiterEditProfile from "./pages/main/RecruiterEditProfile/RecruiterEditProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/recruiter/profile" exact component={RecruiterProfile} />
          <Route
            path="/recruiter/edit"
            exact
            component={RecruiterEditProfile}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
