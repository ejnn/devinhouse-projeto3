import shoppingCartReducer from "redux/slices/shoppingCart.js";
import themeReducer from "redux/slices/theme.js";
import shopeeReducer from "redux/slices/shopee.js";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    shopee: shopeeReducer,
    theme: themeReducer,
});

export default rootReducer;
