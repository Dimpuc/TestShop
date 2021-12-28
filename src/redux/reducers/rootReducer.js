import { combineReducers } from "redux";
import { products } from "./productReducer";
import { app } from "./appReducer";

export const rootReducers = combineReducers({
  app,
  products,
});
