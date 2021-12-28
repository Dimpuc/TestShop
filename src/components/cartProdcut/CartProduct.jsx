import React from "react";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  deleteCartProduct,
  subQuantity,
} from "../../redux/action/action";
import {
  SCartProductBlockBtn,
  SCartProductBlockText,
  SCartProductBtnDelet,
  SCartProduct,
  SCartProductBtn,
  SCartProductImg,
  SCartProductText,
} from "./styled";

const CartProduct = ({ name, url, cost, quantity, id }) => {
  const dispatch = useDispatch();

  const AddQuantity = () => {
    dispatch(addQuantity(id));
  };

  const SubQuantity = () => {
    dispatch(subQuantity(id, quantity));
  };

  const DeleteCartProduct = () => {
    dispatch(deleteCartProduct(id));
  };

  return (
    <SCartProduct>
      <SCartProductImg src={url} />
      <SCartProductBlockBtn>
        <SCartProductBtn onClick={AddQuantity} color={"#00B333"}>
          +
        </SCartProductBtn>
        <SCartProductText>{quantity}</SCartProductText>
        <SCartProductBtn onClick={SubQuantity}>-</SCartProductBtn>
      </SCartProductBlockBtn>
      <SCartProductBlockText>
        <SCartProductBtnDelet onClick={DeleteCartProduct}>
          x
        </SCartProductBtnDelet>
        <SCartProductText>Name: {name}</SCartProductText>
        <SCartProductText>Price: ${cost}</SCartProductText>
        <SCartProductText>Total price: ${cost * quantity}</SCartProductText>
      </SCartProductBlockText>
    </SCartProduct>
  );
};

export default CartProduct;
