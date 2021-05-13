import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/main/landing/landing";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/landing" exact component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
