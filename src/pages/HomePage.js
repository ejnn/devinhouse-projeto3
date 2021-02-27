import { useEffect, useState } from "react";
import ProductsGrid from "components/ProductsGrid";
import { fetchProducts } from "utils/api";

const HomePage = ({}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetchProducts().then((state) => {
      console.log(state);
      setProducts(state);
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
          <div>Bem vindo!</div>
          <ProductsGrid itemData={products} />
        </div>
      }
    </div>
  );
};

export default HomePage;
