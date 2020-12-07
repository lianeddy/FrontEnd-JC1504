// import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { NavigationBar } from "./components";
// import { api_url } from "./helpers/api_url";
import { Landing, LoginPage, RegisterPage } from "./pages";
import { keepLogin, loginAction } from "./redux/action";

class App extends Component {
  state = {};

  componentDidMount() {
    const id = localStorage.getItem("id");
    if (id) {
      // Axios.get(`${api_url}/users/${id}`)
      //   .then((res) => {
      //     this.props.loginAction(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      this.props.keepLogin(id);
    }
  }

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

export default connect(null, { keepLogin, loginAction })(App);
