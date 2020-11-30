import React from "react";
// import CustomButton from "../components/CustomButton.jsx";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Intro extends React.Component {
  state = {
    nama: "Lian",
    arr: [1, 2, 3],
    counter: 0,
    userData: {
      username: "",
      password: "",
      email: "",
    },
  };
  // kurang = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };
  // tambah = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };
  gantiNama = () => {
    const namaBaru = this.refs.nama.value;
    this.setState({ nama: namaBaru });
  };

  funcParam = (params) => {
    console.log(params);
  };

  register = () => {
    // setState
    this.setState({
      userData: {
        username: this.refs.username.value,
        password: this.refs.password.value,
        email: this.refs.email.value,
      },
    });
    console.log(this.state, "state");
    console.log(this.state.userData, "state.userData");
  };

  // onChangeUserData = (e) => {
  //   this.setState({
  //     userData: {
  //       ...this.state.userData,
  //       [e.target.id]: e.target.value,
  //     },
  //   });
  //   console.log(this.state.userData);
  // };

  render() {
    return (
      <div>
        {/* <input
          type="text"
          onChange={this.gantiNamaOnC}
          placeholder="Nama Disini"
        /> */}

        {/* <input type="text" ref="nama" placeholder="Nama Disini" />
        <h1>{this.state.nama}</h1>
        Invoke function dengan parameter
        <button onClick={() => this.funcParam('Hello')}> 
          Button Biasa
        </button> */}
        {/* Invoke function tanpa parameter */}
        {/* <CustomButton warna="blue" klik={this.gantiNama} font="black">
          Tombol Biru
        </CustomButton> */}
        {/* <CustomButton warna="red" font="yellow" klik={() => console.log('ini tombol kuning')}>Tombol Merah</CustomButton>
        <CustomButton warna="yellow" />
        <button onClick={this.gantiNama}>Click Me!</button>
        <button onClick={this.kurang}>-</button>
        <div>{this.state.counter}</div>
        <button onClick={this.tambah}>+</button>
        <div>{this.state.nama}</div> */}
        <div>
          <input
            type="text"
            placeholder="Username"
            ref="username"
            // onChange={this.onChangeUserData}
            id="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            ref="password"
            // onChange={this.onChangeUserData}
            id="password"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            ref="email"
            // onChange={this.onChangeUserData}
            id="email"
          />
        </div>
        <div>
          <Button color="success">Click Me</Button>
          <Button color="success">Click Me</Button>
        </div>
        <div>
          <Link to="/bebas">
            <button>Pindah ke method</button>
          </Link>
          <a href="/bebas">href</a>
        </div>
      </div>
    );
  }
}

export default Intro;
