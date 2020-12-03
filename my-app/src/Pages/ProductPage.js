import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../helpers/API_URL";
import CardProduct from "../components/CardProduct";
import { Button, Input } from "reactstrap";

// Buat sebuah component dengan nama ProductPage.js
// Component ini akan mengambil data dari localhost:2000/products
// Data diambil menggunakan Axios dan dimasukkan ke dalam state
// Ketika sudah, state di map menjadi (bebas) supaya bisa tampil di browser

class ProductPage extends Component {
  state = {
    data: [],
    dataInput: {
      nama: "",
      image: "",
      caption: "",
    },
    bool: false,
  };

  componentDidMount() {
    this.fetchData();
    // Fetch Data Buah
    // setState = state data
    // Axios get
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.bool) {
      this.fetchData();
      this.setState({
        bool: false,
      });
    }
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

  onChangeInput = (e) => {
    this.setState({
      dataInput: {
        ...this.state.dataInput,
        [e.target.id]: e.target.value,
      },
    });
  };

  submitData = () => {
    const { nama, image, caption } = this.state.dataInput;
    Axios.post(`${API_URL}/products`, {
      nama,
      image,
      caption,
    })
      .then((res) => {
        this.setState({
          bool: true,
        });
        // this.fetchData()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>{this.renderProduct()}</div>
        <div>
          <Input
            placeholder="Nama Buah"
            onChange={this.onChangeInput}
            id="nama"
            value={this.state.dataInput.nama}
          />
          <Input
            placeholder="URL foto"
            onChange={this.onChangeInput}
            id="image"
            value={this.state.dataInput.image}
          />
          <Input
            placeholder="caption"
            onChange={this.onChangeInput}
            id="caption"
            value={this.state.dataInput.caption}
          />
          <Button color="success" onClick={this.submitData}>
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductPage;
