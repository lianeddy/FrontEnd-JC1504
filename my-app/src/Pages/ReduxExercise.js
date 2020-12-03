import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { toggleBoolean } from "../Redux";

class ReduxExercise extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>{this.props.bool ? "TRUE" : "FALSE"}</div>
        <div>
          <Button onClick={this.props.toggleBoolean}>Toggle</Button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    bool: state.bool,
  };
};

export default connect(mapStatetoProps, { toggleBoolean })(ReduxExercise);
