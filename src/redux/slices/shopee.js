import * as fakeProductAPI from "utils/fake-product-api";

// actions

const fetchProducts = () => async () => fakeProductAPI.fetchProducts();

const queryProducts = (query) => async () => fakeProductAPI.queryProducts(query);

const getItem = (id) => async () => {
  return fakeProductAPI.fetchProducts()
    .then(ret => ret.filter(item => item.id == id)[0]);
};

export {
  fetchProducts,
  queryProducts,
  getItem,
};
