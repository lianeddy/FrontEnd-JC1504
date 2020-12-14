import Axios from "axios";
import React, { Component } from "react";
import { api_url } from "../helpers/api_url";
import { Button, Input, Table } from "reactstrap";

class ManageProduct extends Component {
  state = {
    data: [],
    selectedData: null,
  };

  componentDidMount() {
    Axios.get(`${api_url}/products`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteData = (id) => {
    Axios.delete(`${api_url}/products/${id}`)
      .then((res) => {
        Axios.get(`${api_url}/products`).then((res) => {
          this.setState({
            data: res.data,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editData = (id) => {
    this.setState({
      selectedData: id,
    });
  };

  cancelEdit = () => {
    this.setState({
      selectedData: null,
    });
  };

  renderList = () => {
    return this.state.data.map((val) => {
      if (this.state.selectedData === val.id) {
        return (
          <tr>
            <td>{val.id}</td>
            <td>
              <Input placeholder="Name" />
            </td>
            <td>
              <Input placeholder="category id" />
            </td>
            <td>
              <Input placeholder="image" />
            </td>
            <td>
              <Input placeholder="price" />
            </td>
            <td>
              <Input placeholder="stock" />
            </td>
            <td>
              <Button onClick={this.cancelEdit}>Cancel</Button>
            </td>
            <td>
              <Button color="info">Save</Button>
            </td>
          </tr>
        );
      }
      return (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.categoryID}</td>
          <td>
            <img src={val.image} alt={`${val.name}.jpeg`} height="100px" />
          </td>
          <td>{val.price}</td>
          <td>{val.stock}</td>
          <td>
            <Button
              color="success"
              style={{ width: "75%" }}
              onClick={() => this.editData(val.id)}
            >
              Edit
            </Button>
          </td>
          <td>
            <Button
              color="danger"
              style={{ width: "75%" }}
              onClick={() => this.deleteData(val.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <Table style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category ID</th>
              <th>Image</th>
              <th>Price</th>
              <th>Stock</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
          <tfoot>
            <tr>
              <td>#</td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td colSpan={2}>
                <Button>Add</Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    );
  }
}

export default ManageProduct;
