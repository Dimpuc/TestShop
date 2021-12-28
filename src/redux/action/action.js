import {
  SET_PRODUCTS,
  ADD_TO_CART,
  ADD_QUANTITY,
  SHOW_PRODUTS,
  SUB_QUANTITY,
  DELETE_CART_PRODUCT,
} from "../actionType";

export const showProducts = () => {
  return {
    type: SHOW_PRODUTS,
  };
};

export const setProducts = (items) => {
  return {
    type: SET_PRODUCTS,
    payload: items,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    payload: id,
  };
};

export const subQuantity = (id, quantity) => {
  return {
    type: SUB_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
};

export const deleteCartProduct = (id) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload: id,
  };
};
