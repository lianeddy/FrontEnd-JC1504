import React, { Component } from "react";

class RegisterPage extends Component {
  state = {
    email: "@gmail.com",
  };

  // Register = tambah data ke dalam database (db.json)
  // tambah data menggunakan Axios.post(url, data)
  // Ketika data berhasil masuk ke dalam database
  // data yang baru saja dimasukkan ke dalam database masuk juga ke redux ke global state
  // Login automatis setelah register

  clickRegister = () => {
    //Code Here
    // this.props.loginAction(res.data[0])
  };

  render() {
    return <div>ini register</div>;
  }
}

export default RegisterPage;
