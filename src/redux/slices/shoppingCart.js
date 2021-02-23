const undefinedKeysReturnZero = {
    get: (target, property, receiver) => {
	if (typeof target[property] == "undefined") {
	    return 0;
	}

	return target[property];
    },
};

const initialState = {
    items: [],
    itemCount: new Proxy({}, undefinedKeysReturnZero),
};


const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {

    case "shoppingCart/addItem":

	var itemId = action.payload.id;

	if (state.itemCount[itemId] == 0) {
	    return {
		items: [...state.items, action.payload],
		itemCount: {...state.itemCount, [itemId]: 1},
	    };
	} 

	return {
	    items: state.items,
	    itemCount: {...state.itemCount, [itemId]: state.itemCount[itemId] + 1},
	};

    case "shoppingCart/removeItem":

	var itemId = action.payload.id;

	if (state.itemCount[itemId] <= 0) {
	    return state;
	}

	if (state.itemCount[itemId] == 1) {

	    const itemCountCopy = Object.assign(state.itemCount, {});
	    delete itemCountCopy[itemId];

	    return {
		items: state.items.filter(item => item.id != itemId),
		itemCount: itemCountCopy,
	    }
	}

	return {
	    items: state.items,
	    itemCount: {...state.itemCount, [itemId]: state.itemCount[itemId] - 1},
	};

    case "shoppingCart/resetCart":
	return initialState;

    default:
	return state;
    }
};

const addItem = (itemData) => ({
    type: "shoppingCart/addItem",
    payload: itemData,
});

const removeItem = (itemData) => ({
    type: "shoppingCart/removeItem",
    payload: itemData,
});

const resetCart = () => ({
    type: "shoppingCart/resetCart",
});

const itemCountSelector = (id) => (state) => state.shoppingCart.itemCount[id];


export { addItem, removeItem, resetCart };

export { itemCountSelector };

export default shoppingCartReducer;
