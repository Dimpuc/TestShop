import styled from "styled-components";

export const SProduct = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 440px;
  margin: 25px 40px 25px;
  /* :hover {
    font-size: 20px;
    transition: 0.5s ease;
  } */
`;

export const SProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const SProductImg = styled.img`
  width: 200px;
  height: 270px;
`;

export const SProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  flex-direction: column;
`;

export const SProductText = styled.h3`
  margin: 10px 0 15px;
`;

export const SProductBtn = styled.button`
  margin-top: 15px;
  width: 180px;
  height: 35px;
  border: none;
  background-color: #26abf9;
  color: #fff;
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #02f5a4;
    transition: 0.8s ease;
  }
`;
