import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// import store from "./redux/store";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Landing from "./pages/main/landing/landing";
import RegisterWorker from "./pages/auth/register/worker/RegisterWorker";
import RegisterRecruiter from "./pages/auth/register/recruiter/RegisterRecruiter";
import Login from "./pages/auth/login/Login";
import ResetPassword from "./pages/main/user/password/ResetPassword";
import ConfirmPassword from "./pages/main/user/password/ConfirmPassword";
import PassLogin from "./pages/main/user/password/PassLogin";
import Request from "./pages/main/user/password/Request";
import Home from "./pages/main/home/Home";
import WorkerEditProfile from "./pages/main/WorkerEditProfile/WorkerEditProfile";
import Chat from "./pages/main/chat/Chat";
import Experience from "./pages/main/experience/Experience";
import RecruiterProfile from "./pages/main/RecruiterProfile/RecruiterProfile";
import Hire from "./pages/main/hire/hire";
import RecruiterEditProfile from "./pages/main/RecruiterEditProfile/RecruiterEditProfile";
import Portofolio from "./pages/main/portfolio/Portfolio";
import PrivateRoute from "../src/helpers/PrivateRoute";
import PublicRoute from "../src/helpers/PublicRoute";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/register-worker" exact component={RegisterWorker} />
              <Route
                path="/register-recruiter"
                exact
                component={RegisterRecruiter}
              />
              <Route path="/reset-password" exact component={ResetPassword} />
              <Route
                path="/confirm-password"
                exact
                component={ConfirmPassword}
              />
              <Route path="/pass-login" exact component={PassLogin} />
              <PublicRoute path="/req-pass" exact component={Request} />
              <PublicRoute
                restricted={true}
                path="/login"
                exact
                component={Login}
              />
              <PrivateRoute
                author="recruiter"
                path="/home"
                exact
                component={Home}
              />
              <PrivateRoute
                author="worker"
                path="/worker/edit"
                exact
                component={WorkerEditProfile}
              />
              <PublicRoute path="/chat" exact component={Chat} />
              <PublicRoute path="/experience/" exact component={Experience} />
              <PublicRoute path="/portofolio/" exact component={Portofolio} />
              <Route path="/" exact component={Landing} />
              <PrivateRoute
                author="recruiter"
                path="/recruiter/profile"
                exact
                component={RecruiterProfile}
              />
              <PrivateRoute
                author="recruiter"
                path="/hire"
                exact
                component={Hire}
              />
              <PrivateRoute
                author="recruiter"
                path="/recruiter/edit"
                exact
                component={RecruiterEditProfile}
              />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
