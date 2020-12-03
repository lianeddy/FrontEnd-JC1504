import React, { Component } from "react";
import Axios from "axios";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerAction } from "../Redux";

class RegisterPage extends Component {
  state = {
    registerInfo: { username: "", password: "", confirm: "" },
  };

  onChangeInput = (e) => {
    this.setState({
      registerInfo: {
        ...this.state.registerInfo,
        [e.target.id]: e.target.value,
      },
    });
  };

  clickRegister = () => {
    const { username, password, confirm } = this.state.registerInfo; // Destructure
    this.props.registerAction({ username, password });
    if (username && password && confirm) {
      if (password === confirm) {
        Axios.post(`http://localhost:2000/users`, {
          username,
          password,
        })
          .then((res) => {
            console.log("masuk");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Password Invalid");
      }
    } else {
      alert("Fill in all the forms!");
    }
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
              value={this.state.registerInfo.username}
            />
          </div>
          <div className="my-1">
            <Input
              type="password"
              placeholder="Password"
              onChange={this.onChangeInput}
              id="password"
              value={this.state.registerInfo.password}
            />
          </div>
          <div className="my-1">
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={this.onChangeInput}
              id="confirm"
              value={this.state.registerInfo.confirm}
            />
          </div>
          <div className="my-1">
            <Button color="success" onClick={this.clickRegister}>
              Register
            </Button>
            <Link to="/login">
              <Button color="danger">To Login</Button>
            </Link>
          </div>
          <div>
            <div>{this.props.username}</div>
            <div>{this.props.password}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    count: state.count,
    username: state.username,
    password: state.password,
  };
};

export default connect(mapStatetoProps, { registerAction })(RegisterPage);
