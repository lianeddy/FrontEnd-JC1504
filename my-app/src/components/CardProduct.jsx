import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const CardProduct = (props) => {
  // nama, image, caption
  return (
    <div>
      <Card style={{ height: "100%", width: "150px" }}>
        <CardImg top width="50%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.nama}</CardTitle>
          <CardText>{props.caption}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProduct;
