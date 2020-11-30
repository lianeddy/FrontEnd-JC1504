import React, { Component } from "react";
import { Button } from "reactstrap";

class ComponentMap extends Component {
  state = {
    data: [
      { name: "Biru", color: "primary" },
      { name: "Merah", color: "danger" },
      { name: "Hijau", color: "success" },
      { name: "Abu-abu", color: "secondary" },
      { name: "Teal", color: "info" },
    ],
  };

  renderButtons = () => {
    let newArr = this.state.data.map((val) => {
      return (
        <div>
          <Button color={val.color}>{val.name}</Button>
        </div>
      );
    });
    return newArr;
  };

  render() {
    return (
      <div>
        <div>{this.renderButtons()}</div>
      </div>
    );
  }
}

export default ComponentMap;
