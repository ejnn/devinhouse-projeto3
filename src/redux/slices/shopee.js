import axios from "axios";

const initialState = {
    products: [],
    productDetailsData: {},
    asyncActionStatus: {
	fetchProducts: "idle",
	queryProducts: "idle",
	fetchProductDetailsData: "idle",
    },
};

const shopeeReducer = (state = initialState, action) => {

    switch (action.type) {

    case "shopee/setProducts":
	return {
	    ...state,
	    products: action.payload,
	};

    case "shopee/setStatusByKey":
	return {
	    ...state,
	    asyncActionStatus: {
		...state.asyncActionStatus,
		[action.payload.key]: action.payload.status,
	    },
	};

    case "shopee/setProductDetailsData":
	return {
	    ...state,
	    productDetailsData: action.payload,
	};

    default:
	return state;
    }
};


const setProducts = (products) => ({
    type: "shopee/setProducts",
    payload: products,
});

const setStatusByKey = (key, status) => ({
    type: "shopee/setStatusByKey",
    payload: {
	key,
	status,
    },
});


const productsSelector = () => (state) => state.shopee.products;
const productDetailsDataSelector = () => (state) => state.shopee.productDetailsData;

export {
    productsSelector,
    productDetailsDataSelector,
};


const fetchProductsSource = axios.CancelToken.source();
const fetchProducts = () => (dispatch, getState) => {

    if (fetchProductsStatusSelector()(getState()) == "pending") {
	fetchProductsSource.cancel("re-fetch was issued!");
    }

    const actionId = "fetchProducts";

    dispatch(setStatusByKey(actionId, "pending"));

    axios.get("/api/fetchProducts", { cancelToken: fetchProductsSource.token })
	.then(res => {
	    dispatch(setProducts(res.data.products));
	    dispatch(setStatusByKey(actionId, "fulfilled"));
	})
	.catch(error => {
	    if (!axios.isCancel(error)) {
		console.log(error);
		dispatch(setStatusByKey(actionId, "rejected"));
	    }
	});
};

const fetchProductsStatusSelector = () => (state) => state.shopee.asyncActionStatus.fetchProducts;

export {
    fetchProducts,
    fetchProductsStatusSelector,
};

const queryProductsSource = axios.CancelToken.source();
const queryProducts = (query) => (dispatch, getState) => {

    if (queryProductsStatusSelector()(getState()) == "pending") {
	queryProductsSource.cancel("a new query was issued!");
    }

    const actionId = "queryProducts";
    
    dispatch(setStatusByKey(actionId, "pending"));

    axios.get("/api/queryProducts/" + query, { cancelToken: queryProductsSource.token })
	.then(res => {
	    dispatch(setProducts(res.data.products));
	    dispatch(setStatusByKey(actionId, "fulfilled"));
	})
	.catch(error => {
	    if (!axios.isCancel(error)) {
		dispatch(setStatusByKey(actionId, "rejected"));
	    }
	});
};

const queryProductsStatusSelector = () => (state) => state.shopee.asyncActionStatus.queryProducts;

export {
    queryProducts,
    queryProductsStatusSelector,
};


const setProductDetailsData = (productData) => ({
    type: "shopee/setProductDetailsData",
    payload: productData,
});

export { setProductDetailsData };

const fetchProductDetailsDataSource = axios.CancelToken.source();
const fetchProductDetailsData = (itemId) => (dispatch, getState) => {

    if (fetchProductDetailsDataStatusSelector()(getState()) == "pending") {
	fetchProductDetailsDataSource.cancel("a newer fetch was issued!");
    }

    const actionId = "fetchProductDetailsData";
    
    dispatch(setStatusByKey(actionId, "pending"));

    axios.get("/api/fetchProducts", { cancelToken: fetchProductDetailsDataSource.token })
	.then(res => {
	    console.log(res);
	    dispatch(setProductDetailsData(res.data.products.filter(item => item.id == itemId)[0]));
	    dispatch(setStatusByKey(actionId, "fulfilled"));
	})
	.catch(error => {
	    if (!axios.isCancel(error)) {
		dispatch(setStatusByKey(actionId, "rejected"));
	    }
	});
};

const fetchProductDetailsDataStatusSelector = () => (state) => state.shopee.asyncActionStatus.fetchProductDetailsData;

export {
    fetchProductDetailsData,
    fetchProductDetailsDataStatusSelector,
};

export default shopeeReducer;
