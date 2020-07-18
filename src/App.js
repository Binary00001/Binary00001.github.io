import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages";
import Projects from "./pages/projects";
import ErrorPage from "./pages/404";
import ShotorNot from "./pages/shotClock";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/404" component={ErrorPage} />
          <Route exact path="/shotClock" component={ShotorNot} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
