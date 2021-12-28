import {
  SHeader,
  SHeaderCart,
  SHeaderContainer,
  SHeaderTitle,
  SHeaderLinkCart,
} from "./styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = () => {
  return (
    <>
      <SHeader>
        <SHeaderContainer>
          <SHeaderLinkCart to="/">
            <SHeaderTitle>HOME</SHeaderTitle>
          </SHeaderLinkCart>
          <SHeaderCart>
            <SHeaderLinkCart to="/cart">
              <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            </SHeaderLinkCart>
          </SHeaderCart>
        </SHeaderContainer>
      </SHeader>
    </>
  );
};
