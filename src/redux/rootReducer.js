import shoppingCartReducer from "redux/slices/shoppingCart.js";
import themeReducer from "redux/slices/theme.js";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    theme: themeReducer,
});

export default rootReducer;
