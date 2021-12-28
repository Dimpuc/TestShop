import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cartProdcut/CartProduct";
import {
  SCart,
  SCartBlockBtn,
  SCartBlockBtnText,
  SCartBlockBtnTextPr,
  SCartBtn,
  SCartContainer,
} from "./styled";

const Cart = () => {
  const cartItem = useSelector((state) => state.products.cartProduct);

  let totalPrice = 0;

  for (let key in cartItem) {
    let tempTotalPrice;
    tempTotalPrice = cartItem[key].quantity * cartItem[key].cost;
    totalPrice += tempTotalPrice;
  }

  if (totalPrice !== 0) {
    return (
      <SCart>
        <SCartContainer>
          {cartItem &&
            cartItem.map((item) => <CartProduct key={item.id} {...item} />)}
          <SCartBlockBtn>
            <SCartBlockBtnText>Total price: ${totalPrice}</SCartBlockBtnText>
            <SCartBtn>Buy</SCartBtn>
          </SCartBlockBtn>
        </SCartContainer>
      </SCart>
    );
  } else {
    return (
      <SCart>
        <SCartContainer>
          <SCartBlockBtnTextPr>BASKET IS EMPTY</SCartBlockBtnTextPr>
        </SCartContainer>
      </SCart>
    );
  }
};

export default Cart;
