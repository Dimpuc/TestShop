import { SHOW_PRODUTS } from "../actionType";

const initState = {
  showProduts: true,
};

export const app = (state = initState, action) => {
  switch (action.type) {
    case SHOW_PRODUTS: {
      return {
        ...state,
        showProduts: false,
      };
    }
    default:
      return state;
  }
};
