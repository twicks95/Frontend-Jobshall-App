import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/main/landing/landing";
import RegisterWorker from "./pages/auth/register/worker/RegisterWorker";
import RegisterRecruiter from "./pages/auth/register/recruiter/RegisterRecruiter";
import Login from "./pages/auth/login/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register-worker" exact component={RegisterWorker} />
          <Route
            path="/register-recruiter"
            exact
            component={RegisterRecruiter}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
