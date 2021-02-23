import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import rootReducer from "redux/rootReducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
