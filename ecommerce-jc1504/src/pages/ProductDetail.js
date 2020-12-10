import React, { Component } from "react";
import queryString from "querystring";
import { connect } from "react-redux";
import { fetchProductByIdAction, addToCartAction } from "../redux/action";
import { Button } from "reactstrap";

class ProductDetail extends Component {
  state = {
    data: {},
    qtySelected: 1,
  };

  componentDidMount() {
    const { fetchProductByIdAction } = this.props;
    // console.log(this.props.location.search);
    // console.log(this.props.location.search.split("="));
    // const productID = this.props.location.search.split("=")[1];
    const productID = queryString.parse(this.props.location.search)["?id"];
    console.log(productID);
    fetchProductByIdAction(productID);
  }

  increaseQty = () => {
    this.setState({
      qtySelected: this.state.qtySelected + 1,
    });
  };

  decreaseQty = () => {
    this.setState({
      qtySelected: this.state.qtySelected - 1,
    });
  };

  addToCart = () => {
    const { productById, userID, addToCartAction } = this.props;
    const { qtySelected } = this.state;
    const { name, price, image } = productById;
    const dataCart = {
      name,
      qty: qtySelected,
      price,
      userID,
      image,
    };
    addToCartAction(dataCart);
  };

  render() {
    const { name, price, stock, image } = this.props.productById;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div>
              <img src={image} alt={`${name}.jpg`} height="300px" />
            </div>
          </div>
          <div className="col-4">
            <div>
              <h1>{name}</h1>
            </div>
            <div>
              <h4>Rp. {price.toLocaleString()}</h4>
            </div>
            <div>Available: {stock}</div>
            <div>
              <Button
                onClick={this.decreaseQty}
                disabled={this.state.qtySelected === 1}
              >
                -
              </Button>
              {this.state.qtySelected}
              <Button
                onClick={this.increaseQty}
                disabled={this.state.qtySelected === stock}
              >
                +
              </Button>
            </div>
            <div>
              <Button onClick={this.addToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ products, user }) => {
  return {
    productById: products.productById,
    userID: user.id,
  };
};

export default connect(mapStatetoProps, {
  fetchProductByIdAction,
  addToCartAction,
})(ProductDetail);
