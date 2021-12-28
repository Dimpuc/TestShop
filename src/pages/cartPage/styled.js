import styled from "styled-components";

export const SCart = styled.div`
  display: flex;
  justify-content: center;
`;

export const SCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  margin: 30px 0 30px 0;
  width: 700px;
  border: 3px solid #26abf9;
`;

export const SCartBlockBtn = styled.div`
  width: 650px;
  height: 120px;
  border-radius: 10px;
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: -6px 7px 23px 6px rgba(118, 118, 118, 0.2);
`;

export const SCartBlockBtnText = styled.h3`
  font-weight: bold;
`;

export const SCartBlockBtnTextPr = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const SCartBtn = styled.button`
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
    transition: 0.5s ease;
  }
`;
