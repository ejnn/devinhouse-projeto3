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
    
    if (loading) {
	return (
    	    <PageContents>
		<DetailedProductCardSkeleton/>
    	    </PageContents>
	);
    }
    
    return (
    	<PageContents>
            <Title fontSize={((width < 650)? '2rem' : null)}>{product.name}</Title>
            <DetailedProductCard itemData={product} />
            <GoBackButton/>
    	</PageContents>
    );
}

export default ProductDetailsPage;
