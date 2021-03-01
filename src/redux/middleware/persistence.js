const persistenceMiddleware = ({ dispatch, getState }) => next => action => {

    next(action);

    if (action.type.includes("shoppingCart")) {
	const shoppingCart = getState().shoppingCart;
	window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    };

};

export default persistenceMiddleware;
