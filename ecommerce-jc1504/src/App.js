import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { Landing, LoginPage, RegisterPage } from "./pages";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default App;
