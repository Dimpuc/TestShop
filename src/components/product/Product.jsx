import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addToCart } from "../../redux/action/action";

import {
  SProduct,
  SProductBtn,
  SProductContainer,
  SProductImg,
  SProductInfo,
  SProductText,
} from "./styled";

const Product = ({ name, cost, url, id, quantity }) => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const AddToCart = () => {
    if (quantity === 0) {
      dispatch(addToCart(id));
    } else if (quantity > 0) {
      dispatch(addQuantity(id));
    }
  };

  return (
    <SProduct>
      <SProductContainer>
        <SProductImg src={url} alt="icon" />
        <SProductInfo>
          <SProductText> {name} </SProductText>
          <SProductText>Price: ${cost} </SProductText>
        </SProductInfo>
        <SProductBtn onClick={AddToCart}>Buy</SProductBtn>
      </SProductContainer>
    </SProduct>
  );
};

export default Product;
