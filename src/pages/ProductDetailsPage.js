import DetailedProductCard from "components/DetailedProductCard";
import { useEffect, useState } from "react";
import { fetchProduct } from "utils/api";
import Title from "components/Title";
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
        </div>
      }
    </div>
  );
};

export default ProductDetailsPage;
