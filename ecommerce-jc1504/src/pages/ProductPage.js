import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsAction, fetchCategoriesAction } from "../redux/action";
import Select from "react-select";
import { ProductCard } from "../components";
import { Link } from "react-router-dom";

class ProductPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchCategoriesAction, fetchProductsAction } = this.props;
    fetchCategoriesAction();
    fetchProductsAction();
  }

  renderCategoryList = () => {
    //[{id: 1, category: "iphone"}]
    //[{value : "iphone", label: "iphone"}]
    let newArr = this.props.categories.map((val) => {
      return { value: val.category, label: val.category };
    });
    return <Select options={newArr} />;
  };

  renderProductList = () => {
    return this.props.productList.map((val) => {
      return (
        <div className="m-2">
          <Link to={`/product-detail?id=${val.id}`}>
            <ProductCard image={val.image} name={val.name} price={val.price} />
          </Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div>
            <h5>Categories</h5>
          </div>
          <div>{this.renderCategoryList()}</div>
        </div>
        <div className="col-9" style={{ display: "flex", flexWrap: "wrap" }}>
          {this.renderProductList()}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    categories: state.products.categories,
    productList: state.products.productList,
  };
};

export default connect(mapStatetoProps, {
  fetchCategoriesAction,
  fetchProductsAction,
})(ProductPage);
