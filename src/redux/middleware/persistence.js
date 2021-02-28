const persistenceMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type.includes("shoppingCart")) {
	next(action);
	const shoppingCart = getState().shoppingCart;
	window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    };

};

export default persistenceMiddleware;
