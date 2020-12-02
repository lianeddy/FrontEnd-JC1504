import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Intro from "./Pages/Intro";
// import Method from "./Pages/Method";
// import DetailBuah from "./Pages/DetailBuah";
// import ComponentMap from "./Pages/ComponentMap";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import RegisterPage from "./Pages/RegisterPage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route path="/" exact component={Intro} />
        <Route path="/bebas" component={Method} />
        <Route path="/detail-buah" component={DetailBuah} />
        <Route path="/component-map" component={ComponentMap} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/products" component={ProductPage} />
      </div>
    );
  }
}

export default App;
