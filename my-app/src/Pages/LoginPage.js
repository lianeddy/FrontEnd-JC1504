import React, { Component } from "react";
import Axios from "axios";
import { Button, Input } from "reactstrap";

class LoginPage extends Component {
  state = {
    loginInfo: { username: "", password: "" },
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
      `http://localhost:2000/users?username=${this.state.loginInfo.username}&password=${this.state.loginInfo.password}`
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
              id="username"
              value={this.state.loginInfo.username}
            />
          </div>
          <div className="my-1">
            <Input
              type="password"
              placeholder="Password"
              onChange={this.onChangeInput}
              id="password"
              value={this.state.loginInfo.password}
            />
          </div>
          <div className="my-1">
            <Button color="success" onClick={this.clickLogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
