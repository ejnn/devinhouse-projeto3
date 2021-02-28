import { useEffect, useState } from "react";

import { fetchProducts } from "utils/api";

import ProductsGrid from "components/ProductsGrid";
import Title from "components/Title";
import PageContents from 'components/PageContents';

const HomePage = ({}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetchProducts().then((state) => {
      setProducts(state);
      setLoading(!loading);
    });
  }, []);

  return (
    <PageContents>
      {
      loading 
      ? <div>skeleton</div>
      : 
        <>
          <Title>Bem-vindo!</Title>
          <ProductsGrid itemData={products} />
        </>
      }
    </PageContents>
  );
};

export default HomePage;
