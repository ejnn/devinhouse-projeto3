const storedState = window.localStorage.getItem("shoppingCart");
const initialState =  {
    items: [],
    itemCount: {},
}

const shoppingCartReducer = (state = (storedState == null) ? initialState : JSON.parse(storedState),
			     action) => {

    const itemId = action.payload?.id;
    
    switch (action.type) {
	
    case "shoppingCart/addItem":
	
	if (typeof state.itemCount[itemId] == "undefined") {
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
	
	if (typeof state.itemCount[itemId] == "undefined") {
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

const itemCountSelector = (id) => (state) => {

    const amount = state.shoppingCart.itemCount[id];

    if (typeof amount == "undefined") return 0;
    else return amount;
}

const distinctItemsCountSelector = () => (state) => state.shoppingCart.items.length;

const cartedItemsSelector = () => (state) => state.shoppingCart.items;

const totalPriceSelector = () => (state) => {
    return state.shoppingCart.items
	.reduce((acc, cur) => acc + (cur.price * itemCountSelector(cur.id)(state)), 0);
};

export {
    itemCountSelector,
    distinctItemsCountSelector,
    cartedItemsSelector,
    totalPriceSelector,
};

