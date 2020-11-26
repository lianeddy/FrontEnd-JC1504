import React from "react";
import CardProduct from "../components/CardProduct.jsx";

class Method extends React.Component {
  state = {
    data: [],
    counter: 0,
  };

  componentDidMount() {
    this.setState({
      data: [
        {
          nama: "Apel",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-FqVB0I2bP7M%2FU9RLuaLRC2I%2FAAAAAAAAA18%2F0CPwPy-poNE%2Fs1600%2FKandungan-Gizi-Dan-Manfaat-Buah-Apel.jpg&f=1&nofb=1",
          caption: "wah enak apel",
        },
        {
          nama: "Duren",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-6NabAIFLkjs%2FUe4wbiyn0yI%2FAAAAAAAAQdM%2FM2VeSCoGni8%2Fs1600%2Fduren.jpg&f=1&nofb=1",
          caption: "wah enak duren",
        },
        {
          nama: "Mangga",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zepto.store%2Fmy%2Fwp-content%2Fuploads%2F2020%2F03%2FMangga-Susu-Susu-Mango.jpg&f=1&nofb=1",
          caption: "wah enak mangga",
        },
      ],
    });
  }
  componentDidUpdate() {
    // Updating
    // Jalan setiap kali state berubah
    // if (this.state.counter % 5 === 0) {
    //   console.log("ini did update");
    // }
  }
  componentWillUnmount() {
    // Unmounting
  }

  //   renderData = () => {
  //     var newArr = this.state.data.map((val) => {
  //       return (
  //         <CardProduct nama={val.nama} image={val.image} caption={val.caption} />
  //       );
  //     });
  //     return newArr;
  //   };

  render() {
    console.log(this.state.data);
    return (
      <div>
        {/* <div>Ini halaman method</div>
        <div>{this.state.counter}</div>
        <div onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          +
        </div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.state.data.map((val) => {
            return (
              <CardProduct
                nama={val.nama}
                image={val.image}
                caption={val.caption}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Method;
