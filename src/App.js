import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/main/landing/landing";
import RegisterWorker from "./pages/auth/register/worker/RegisterWorker";
import RegisterRecruiter from "./pages/auth/register/recruiter/RegisterRecruiter";
import Login from "./pages/auth/login/Login";
import ResetPassword from "./pages/main/user/password/ResetPassword";
import ConfirmPassword from "./pages/main/user/password/ConfirmPassword";
import PassLogin from "./pages/main/user/password/PassLogin";
import Request from "./pages/main/user/password/Request";
import Home from "./pages/main/home/Home";

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
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/confirm-password" exact component={ConfirmPassword} />
          <Route path="/pass-login" exact component={PassLogin} />
          <Route path="/req-pass" exact component={Request} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
