import { useEffect, useState } from "react";

import { fetchProducts } from "utils/api";

import ProductsGrid from "components/ProductsGrid";
import Title from "components/Title";
import PageContents from 'components/PageContents';
import ProductsGridSkeleton from 'components/ProductsGridSkeleton'

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
    <PageContents>
          <Title>Bem-vindo!</Title>
      {loading 
      ? <ProductsGridSkeleton />
      : <ProductsGrid itemData={products} />
      }
    </PageContents>
  );
};

export default HomePage;
