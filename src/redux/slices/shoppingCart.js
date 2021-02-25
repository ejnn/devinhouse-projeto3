const undefinedKeysReturnZero = {
    get: (target, property, receiver) => {
	if (typeof target[property] == "undefined") {
	    return 0;
	}
	
	return target[property];
    },
};

const createItemCountProxy = (baseObject) => new Proxy(baseObject, undefinedKeysReturnZero);

const initialState = {
    items: [],
    itemCount: createItemCountProxy({}),
};


const shoppingCartReducer = (state = initialState, action) => {
    
    switch (action.type) {
	
    case "shoppingCart/addItem":
	
	var itemId = action.payload.id;
	
	if (state.itemCount[itemId] == 0) {
	    return {
		items: [...state.items, action.payload],
		itemCount: createItemCountProxy({...state.itemCount,
						 [itemId]: 1}),
	    };
	} 
	
	return {
	    items: state.items,
	    itemCount: createItemCountProxy({...state.itemCount,
					     [itemId]: state.itemCount[itemId] + 1}),
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
		itemCount: createItemCountProxy(itemCountCopy),
	    }
	}
	
	return {
	    items: state.items,
	    itemCount: createItemCountProxy({...state.itemCount,
					     [itemId]: state.itemCount[itemId] - 1}),
	};
	
    case "shoppingCart/resetCart":
	return initialState;
	
    default:
	return state;
    }
};

export default shoppingCartReducer;


// action creators

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

export {
    addItem,
    removeItem,
    resetCart
};


// selectors

const itemCountSelector = (id) => (state) => state.shoppingCart.itemCount[id];

const distinctItemsCountSelector = () => (state) => state.shoppingCart.items.length;

const cartedItemsSelector = () => (state) => state.shoppingCart.items;

export {
    itemCountSelector,
    distinctItemsCountSelector,
    cartedItemsSelector,
};

