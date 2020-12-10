import Axios from "axios";
import { api_url } from "../../helpers/api_url";

export const addToCartAction = (data) => {
  return (dispatch) => {
    Axios.post(`${api_url}/cart`, data)
      .then((res) => {
        console.log("data masuk");
        dispatch({
          type: "ADD_TO_CART",
        });
      })
      .catch((err) => {
        console.log(err);
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
