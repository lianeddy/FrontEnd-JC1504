import React from 'react';

const CardProduct = (props) => {
    // nama, image, caption
    return ( 
        <div style={{border: '1px solid black', margin: "0px 10px"}}>
            <h1>{props.nama}</h1>
            <img src={props.image} alt="" height="50px" />
            <p>{props.caption}</p>
        </div>
    );
}
 
export default CardProduct;