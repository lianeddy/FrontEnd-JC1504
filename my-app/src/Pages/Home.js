import React, { Component } from "react";
import Axios from "axios";
import { API_KEY } from "../helpers/Zomato";
import { Button } from "reactstrap";

class Home extends Component {
  state = {
    categories: [],
    selectedCategory: "",
  };

  componentDidMount() {
    Axios.get("https://developers.zomato.com/api/v2.1/categories", {
      headers: {
        "user-key": API_KEY,
      },
    })
      .then((res) => {
        this.setState({
          categories: res.data.categories,
        });
        // console.log(this.state.categories);
      })
      .catch((err) => {
        console.log(err, "ini error");
      });
  }

  renderCategories = () => {
    return this.state.categories.map((val) => {
      return (
        <div className="my-1">
          <Button
            color="danger"
            style={{ width: "100%" }}
            onClick={() => this.changeSelected(val.categories.name)}
          >
            {val.categories.name}
          </Button>
        </div>
      );
    });
  };

  changeSelected = (category) => {
    this.setState({
      selectedCategory: category,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">{this.renderCategories()}</div>
        <div className="col-10">{this.state.selectedCategory}</div>
      </div>
    );
  }
}

export default Home;
