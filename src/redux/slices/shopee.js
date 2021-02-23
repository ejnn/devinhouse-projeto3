import {
    fetchProducts as apiFetchProducts,
    queryProducts as apiQueryProducts,
} from "utils/api";

const initialState = {
    items: [],
};

const shopeeReducer = (state = initialState, action) => {
};

const fetchProducts = async () => () => apiFetchProducts();
};

const queryProducts = async (query) => () => apiQueryProducts(query);
};

export { fetchProducts, queryProducts };
