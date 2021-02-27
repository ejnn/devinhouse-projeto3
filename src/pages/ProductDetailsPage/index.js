import { useEffect, useState } from "react";

import { fetchProduct } from "utils/api";

import DetailedProductCard from "./DetailedProductCard";
import Title from "components/Title";
import GoBackButton from "./GoBackButton";

const ProductDetailsPage = ({ productId }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    fetchProduct(productId).then((state) => {
      console.log(state);
      setProduct(state);
      setLoading(!loading);
    });
  }, []);

  return (
    <div>
      {
	  loading 
	  ? <div>skeleton</div>
      :
        <div>
          <Title>{product.name}</Title>
          <DetailedProductCard itemData={product} />
          <GoBackButton/>
        </div>
      }
    </div>
  );
};

export default ProductDetailsPage;
