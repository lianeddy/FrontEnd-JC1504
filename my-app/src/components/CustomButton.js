import React from "react";

const CustomButton = (props) => {
  console.log(props);
  return (
    <button
      onClick={props.klik}
      style={{
        padding: "10px",
        backgroundColor: props.warna,
        color: "white",
        outline: "none",
        border: "none",
      }}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
