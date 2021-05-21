import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Landing from "./pages/main/landing/landing";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/landing" exact component={Landing} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
