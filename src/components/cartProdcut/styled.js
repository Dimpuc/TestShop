import styled from "styled-components";

export const SCartProduct = styled.div`
  width: 650px;
  display: flex;
  align-items: center;
  height: 230px;
  box-shadow: -6px 7px 23px 6px rgba(118, 118, 118, 0.2);
  margin: 40px 0 30px 0;
  border-radius: 10px;
`;

export const SCartProductImg = styled.img`
  width: 170px;
  height: 200px;
  margin-left: 20px;
`;

export const SCartProductBlockBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  flex: 1;
`;

export const SCartProductBtn = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  font-size: 25px;
  font-weight: lighter;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color || "#DB0700"};
  text-align: center;
  margin: 0 10px 0 10px;
`;

export const SCartProductBlockText = styled.div`
  flex: 1;
`;

export const SCartProductText = styled.h3``;

export const SCartProductBtnDelet = styled.button`
  margin-left: 150px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  text-align: center;
  background-color: #db0700;
  color: #fff;
  font-weight: lighter;
  font-size: large;
  border-radius: 5px;
`;
