import React, { Component } from "react";
import Axios from "axios";
import { API_KEY } from "../helpers/Zomato";
import { Button } from "reactstrap";
import CardProduct from "../components/CardProduct";

class Home extends Component {
  state = {
    categories: [],
    selectedCategory: "",
    selectedCategoryId: 0,
    restaurantList: [],
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCategoryId !== this.state.selectedCategoryId) {
      Axios.get(
        `https://developers.zomato.com/api/v2.1/search?category=${this.state.selectedCategoryId}&count=10`,
        {
          headers: {
            "user-key": API_KEY,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          this.setState({
            restaurantList: res.data.restaurants,
          });
          console.log(this.state.restaurantList, "list");
        })
        .catch((err) => {
          console.log(err, "ini error");
        });
    }
  }

  renderCategories = () => {
    return this.state.categories.map((val) => {
      return (
        <div className="my-1">
          <Button
            color="danger"
            style={{ width: "100%" }}
            onClick={() =>
              this.changeSelected(val.categories.name, val.categories.name)
            }
          >
            {val.categories.name}
          </Button>
        </div>
      );
    });
  };

  renderRestaurants = () => {
    if (this.state.restaurantList.length !== 0) {
      return this.state.restaurantList.map((val) => {
        return (
          <div className="col-3 my-1" style={{ height: "400px" }}>
            <CardProduct
              image={val.restaurant.featured_image}
              nama={val.restaurant.name}
              caption={val.restaurant.cuisines}
            />
          </div>
        );
      });
    }
  };

  changeSelected = (category, id) => {
    this.setState({
      selectedCategory: category,
      selectedCategoryId: id,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">{this.renderCategories()}</div>
        <div className="col-10">
          <div>
            <h2>{this.state.selectedCategory}</h2>
          </div>
          <div className="row">{this.renderRestaurants()}</div>
        </div>
      </div>
    );
  }
}

export default Home;
