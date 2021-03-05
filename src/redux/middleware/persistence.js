const persistenceMiddleware = ({ dispatch, getState }) => next => action => {

  next(action);

  if (action.type.includes("shoppingCart")) {
    const shoppingCart = getState().shoppingCart;
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  } else if (action.type.includes("theme")) {
    const theme = getState().theme;
    window.localStorage.setItem("theme", JSON.stringify(theme));
  }
  ;

};

export default persistenceMiddleware;
