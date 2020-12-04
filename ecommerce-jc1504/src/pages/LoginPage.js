import Axios from "axios";
import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { api_url } from "../helpers/api_url";
import { loginAction } from "../redux/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    loginInfo: {
      email: "",
      password: "",
    },
  };

  onChangeInput = (e) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.id]: e.target.value,
      },
    });
  };

  clickLogin = () => {
    const { email, password } = this.state.loginInfo;
    Axios.get(`${api_url}/users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length !== 0) {
          this.props.loginAction(res.data[0]);
        } else {
          alert("User Invalid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password } = this.state.loginInfo;
    if (this.props.emailUser !== "") {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div>
          <Input
            placeholder="email"
            type="email"
            id="email"
            onChange={this.onChangeInput}
            value={email}
          />
          <Input
            placeholder="password"
            type="password"
            id="password"
            onChange={this.onChangeInput}
            value={password}
          />
          <Button onClick={this.clickLogin}>Log In</Button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    emailUser: state.user.email,
  };
};

export default connect(mapStatetoProps, { loginAction })(LoginPage);
