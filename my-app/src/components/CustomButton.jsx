import React from "react";

const CustomButton = (props) => {
  // props.warna props.klik props.font
  return (
    <button
      onClick={props.klik}
      style={{
        padding: "10px",
        backgroundColor: props.warna,
        color: props.font,
        outline: "none",
        border: "none",
      }}
    >
      {props.children}
    </button>
  );
};

export default CustomButton