import React, { Component } from "react";
import Axios from "axios";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { decreaseCount, increaseCount, loginAction } from "../Redux";

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
    this.props.loginAction(this.state.loginInfo.usernameLogin);
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
        <div>
          <Button onClick={this.props.decreaseCount}>-</Button>
          {this.props.count}
          <Button onClick={this.props.increaseCount}>+</Button>
        </div>
        <div>{this.props.nama}</div>
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

// mapstatetoprops itu untuk ambil data dari global state
// kenapa state.count
// lihat initial state
// const INITIAL_STATE = {
//   count: 0,
//   username: "",
//   password: "",
// };

// tulisan di kiri itu nama props
// this.props.count untuk akses data global state count
const mapStateToProps = (state) => {
  return {
    count: state.count,
    nama: state.username,
  };
};

// argumen kedua dari fungsi connect adalah object
// object diisi dengan action creator
// function yang return action
// function yang return object dengan type dan payload
export default connect(mapStateToProps, {
  decreaseCount,
  increaseCount,
  loginAction,
})(LoginPage);
