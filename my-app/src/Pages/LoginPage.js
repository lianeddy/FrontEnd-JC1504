import React, { Component } from "react";
import Axios from "axios";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {
    loginInfo: { usernameLogin: "", passwordLogin: "" },
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
    Axios.get(
      `http://localhost:2000/users?username=${this.state.loginInfo.usernameLogin}&password=${this.state.loginInfo.passwordLogin}`
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="my-1">
            <Input
              placeholder="Username"
              onChange={this.onChangeInput}
              id="usernameLogin"
              value={this.state.loginInfo.username}
            />
          </div>
          <div className="my-1">
            <Input
              type="password"
              placeholder="Password"
              onChange={this.onChangeInput}
              id="passwordLogin"
              value={this.state.loginInfo.password}
            />
          </div>
          <div className="my-1">
            <Button color="success" onClick={this.clickLogin}>
              Login
            </Button>
            <Link to="/register">
              <Button color="danger">To Register</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
