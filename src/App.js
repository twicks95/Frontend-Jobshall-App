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
import WorkerEditProfile from "./pages/main/profile/WorkerEditProfile/WorkerEditProfile";
import Chat from "./pages/main/chat/Chat";
import Experience from "./pages/main/experience/Experience";
import RecruiterProfile from "./pages/main/RecruiterProfile/RecruiterProfile";
// import RecruiterEditProfile from "./pages/main/RecruiterEditProfile/RecruiterEditProfile";
import Hire from "./pages/main/hire/hire";

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
          <Route path="/worker/edit" exact component={WorkerEditProfile} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/" exact component={Landing} />
          <Route path="/recruiter/profile" exact component={RecruiterProfile} />
          {/* <Route
            path="/recruiter/edit"
            exact
            component={RecruiterEditProfile}
          /> */}
          <Route path="/hire" exact component={Hire} />
        </Switch>
      </Router>
    );
  }
}

export default App;
