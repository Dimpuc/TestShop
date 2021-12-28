import {
  ADD_TO_CART,
  SET_PRODUCTS,
  ADD_QUANTITY,
  SUB_QUANTITY,
  DELETE_CART_PRODUCT,
} from "../actionType";

const initState = {
  products:
    JSON.parse(localStorage.getItem("Products")) === null
      ? []
      : JSON.parse(localStorage.getItem("Products")),
  cartProduct:
    JSON.parse(localStorage.getItem("CartItem")) === null
      ? []
      : JSON.parse(localStorage.getItem("CartItem")),
};

export const products = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      localStorage.setItem("Products", JSON.stringify(action.payload));
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("Products")),
      };
    case ADD_TO_CART:
      let tempProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      let tempCartItem = state.products
        .filter((product) => product.id === action.payload)
        .map((item) => {
          if (item.id === action.payload) {
            item = { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

      let cartArr = [];

      cartArr = [...state.cartProduct, ...tempCartItem];

      localStorage.setItem("Products", JSON.stringify(tempProduct));
      localStorage.setItem("CartItem", JSON.stringify(cartArr));

      return {
        ...state,
        products: JSON.parse(localStorage.getItem("Products")),
        cartProduct: JSON.parse(localStorage.getItem("CartItem")),
      };

    case ADD_QUANTITY: {
      let tempCart = state.cartProduct.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      localStorage.setItem("CartItem", JSON.stringify(tempCart));
      return {
        ...state,
        cartProduct: JSON.parse(localStorage.getItem("CartItem")),
      };
    }
    case SUB_QUANTITY: {
      let tempProduct = [];
      let tempCart = [];

      if (action.payload.quantity === 1) {
        console.log(123);
        tempCart = state.cartProduct.filter(
          (item) => item.id !== action.payload.id
        );

        tempProduct = state.products.map((item) => {
          if (item.id === action.payload.id) {
            console.log(item);
            item = { ...item, quantity: 0 };
          }
          return item;
        });

        localStorage.setItem("Products", JSON.stringify(tempProduct));
      } else if (action.payload.quantity > 1) {
        tempCart = state.cartProduct.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }

      localStorage.setItem("CartItem", JSON.stringify(tempCart));
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("Products")),
        cartProduct: JSON.parse(localStorage.getItem("CartItem")),
      };
    }

    case DELETE_CART_PRODUCT: {
      let tempCart = state.cartProduct.map((item) => {
        item = { ...item };
        return item;
      });

      let tempProduct = state.products.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, quantity: 0 };
        }
        return item;
      });
      localStorage.setItem("Products", JSON.stringify(tempProduct));

      tempCart.map((item, index) => {
        if (item.id === action.payload) {
          if (index === 0) {
            tempCart.splice(index, index + 1);
            item = { ...item };
          } else {
            tempCart.splice(index, index);
            item = { ...item };
          }
        }
        return item;
      });

      localStorage.setItem("Products", JSON.stringify(tempProduct));
      localStorage.setItem("CartItem", JSON.stringify(tempCart));

      return {
        ...state,
        cartProduct: JSON.parse(localStorage.getItem("CartItem")),
        products: JSON.parse(localStorage.getItem("Products")),
      };
    }

    default:
      return state;
  }
};
