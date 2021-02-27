import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsGrid from 'components/ProductsGrid'

import {
  productsSelector,
  fetchProductsStatusSelector,
  fetchProducts,
} from "redux/slices/shopee";

const HomePage = ({ }) => {

  const dispatch = useDispatch();

  const products = useSelector(productsSelector());
  const fetchProductsStatus = useSelector(fetchProductsStatusSelector());

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div> fetch status: {fetchProductsStatus} </div>
        {
          fetchProductsStatus == "pending"
            ? "~ here be skeletons ~"
            : <ProductsGrid itemData={products} />
        }
    </>
  );
};

export default HomePage;
