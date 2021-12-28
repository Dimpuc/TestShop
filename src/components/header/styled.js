import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SHeader = styled.div`
  height: 100px;
  background: linear-gradient(#26abf9, #26abf9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const SHeaderContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

export const SHeaderTitle = styled.h3`
  color: inherit;
  font-size: 30px;
  font-weight: bold;
`;

export const SHeaderCart = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-top: 6px;
`;

export const SHeaderLinkCart = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;
