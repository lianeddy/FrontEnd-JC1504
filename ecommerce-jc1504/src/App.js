import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { Landing, LoginPage } from "./pages";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar />
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
