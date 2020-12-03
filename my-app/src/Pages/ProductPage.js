import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../helpers/API_URL";
import CardProduct from "../components/CardProduct";

// Buat sebuah component dengan nama ProductPage.js
// Component ini akan mengambil data dari localhost:2000/products
// Data diambil menggunakan Axios dan dimasukkan ke dalam state
// Ketika sudah, state di map menjadi (bebas) supaya bisa tampil di browser

class ProductPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
    // Fetch Data Buah
    // setState = state data
    // Axios get
  }

  fetchData = () => {
    Axios.get(`${API_URL}/products`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Tambah Produk
  // ComponentDidUpdate
  // addProduct() === function sendiri
  // Setelah axios.post ada .then
  // di dalam .then ada axios.get(products)
  // setstate lagi

  renderProduct() {
    console.log(this.state.data);
    return this.state.data.map((val) => {
      return (
        <div style={{ height: "400px", width: "200px" }}>
          <CardProduct
            nama={val.nama}
            caption={val.caption}
            image={val.image}
          />
        </div>
      );
    });
  }

  render() {
    return <div style={{ display: "flex" }}>{this.renderProduct()}</div>;
  }
}

export default ProductPage;
