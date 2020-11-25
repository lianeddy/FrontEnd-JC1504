import React from "react";
import CustomButton from "./components/CustomButton";

class App extends React.Component {
  state = {
    nama: "Lian",
    arr: [1, 2, 3],
    counter: 0,
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

  // gantiNamaOnC = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ nama: e.target.value });
  // };
  render() {
    return (
      <div>
        {/* <input
          type="text"
          onChange={this.gantiNamaOnC}
          placeholder="Nama Disini"
        /> */}
        <input type="text" ref="nama" placeholder="Nama Disini" />
        <h1>{this.state.nama}</h1>
        <CustomButton warna="blue" klik={this.gantiNama}>
          Tombol Biru
        </CustomButton>
        {/* <CustomButton warna="red" />
        <CustomButton warna="yellow" /> */}
        {/* <button onClick={this.gantiNama}>Click Me!</button> */}
        {/* <button onClick={this.kurang}>-</button>
        <div>{this.state.counter}</div>
        <button onClick={this.tambah}>+</button> */}
        {/* <div>{this.state.nama}</div> */}
      </div>
    );
  }
}

export default App;
