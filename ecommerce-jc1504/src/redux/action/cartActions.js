import Axios from "axios";
import { api_url } from "../../helpers/api_url";
import swal from "sweetalert";

export const addToCartAction = (data) => {
  return (dispatch) => {
    Axios.post(`${api_url}/cart`, data)
      .then((res) => {
        console.log("data masuk");
        swal("Success!", "Product added to cart!", "success");
        dispatch({
          type: "ADD_TO_CART",
        });
      })
      .catch((err) => {
        console.log(err);
        swal(
          "Something went wrong",
          "Please contact an Administrator",
          "error"
        );
      });
  };
};

export const getCartActionById = (id) => {
  return (dispatch) => {
    Axios.get(`${api_url}/cart?userID=${id}`)
      .then((res) => {
        dispatch({
          type: "FETCH_CART",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
