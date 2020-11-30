import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  // CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const CardProduct = (props) => {
  // nama, image, caption
  return (
      <Card style={{ height: "100%", width: "100%" }}>
        <CardImg top width="50%" src={props.image} alt="Card image cap"/>
        <CardBody>
          <CardTitle tag="h5">{props.nama}</CardTitle>
          <CardText>{props.caption}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  );
};

export default CardProduct;
