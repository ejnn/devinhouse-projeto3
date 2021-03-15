import { useEffect, useState } from "react";
import { fetchProduct } from "utils/api";
import useWindowSize from 'hooks/useWindowSize';

import DetailedProductCard from "./DetailedProductCard";
import Title from "components/Title";
import GoBackButton from "./GoBackButton";
import PageContents from "components/PageContents";
import DetailedProductCardSkeleton from "./DetailedProductCardSkeleton";

const ProductDetailsPage = ({ productId }) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const { width } = useWindowSize();

  useEffect(() => {
    fetchProduct(productId).then(state => {
      setProduct(state)
      setLoading(!loading)
    })
  }, [])

  const isLoading = (product) => {
    if (loading) {
      return <DetailedProductCardSkeleton />
    }
      return <>
        <Title fontSize={((width < 650)? '2rem' : null)}>{product.name}</Title>
        <DetailedProductCard itemData={product} />
        <GoBackButton />
      </>
    }

  return (
    <PageContents>
      {isLoading(product)}
    </PageContents>
  )
}

export default ProductDetailsPage
