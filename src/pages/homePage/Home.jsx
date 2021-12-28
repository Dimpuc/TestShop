import { useDispatch, useSelector } from "react-redux";
import { SHome, SHomeContainer, SLoadBtn } from "./styled";
import Product from "../../components/product/Product";
import { showProducts } from "../../redux/action/action";
import { Operation } from "../../redux/operation/operation";

export const Home = () => {
  const products = useSelector((products) => products.products.products);
  const showProductss = useSelector((state) => state.app.showProduts);

  const dispatch = useDispatch();

  const loadProductsHandler = async () => {
    dispatch(showProducts());
    dispatch(Operation());
  };

  return (
    <SHome>
      <SHomeContainer>
        {showProductss ? (
          <SLoadBtn onClick={loadProductsHandler}>Load Products</SLoadBtn>
        ) : (
          products &&
          products.map((item) => <Product key={item.id} {...item} />)
        )}
      </SHomeContainer>
    </SHome>
  );
};
