import { setProducts } from "../action/action";

export const Operation = (status) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:3000/db.json");
    let content = await response.json();
    // console.log(status);

    dispatch(setProducts(content));
  } catch {}

  //   const dispatch = useDispatch();
};
