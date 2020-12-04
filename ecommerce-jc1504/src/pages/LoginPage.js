import React, { Component } from "react";
import { Button, Input } from "reactstrap";

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

  render() {
    const { email, password } = this.state.loginInfo;
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
          <Button>Log In</Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
