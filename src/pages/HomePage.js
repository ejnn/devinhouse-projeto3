import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsGrid from 'components/ProductsGrid'
import { fetchProducts } from 'utils/api'
// import {
//   productsSelector,
//   fetchProductsStatusSelector,
//   fetchProducts,
// } from "redux/slices/shopee";

const HomePage = ({ }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  // const fetchProductsStatus = useSelector(fetchProductsStatusSelector());

  useEffect(() => {
    fetchProducts().then((state) => {
      console.log(state)
      setProducts(state)
      setLoading(!loading)
    })
  }, []);

  return (
    <div>
      {loading && <div>skeleton</div>}
      <div>
      {(loading === false) && <ProductsGrid itemData={products} />}
      </div>
    </div>
  );
};

export default HomePage;
