import { createStore, applyMiddleware } from "redux";

import persistenceMiddleware from "redux/middleware/persistence";

import thunk from "redux-thunk";

import rootReducer from "redux/rootReducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk, persistenceMiddleware));

export default store;
