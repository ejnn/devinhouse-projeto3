import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getItem } from "redux/slices/shopee";

const ProductDetailsPage = ({ productId }) => {

    const dispatch = useDispatch();

    const [product, setProduct] = useState();

    useEffect(async () => {
	dispatch(getItem(productId))
	    .then(res => setProduct(res))
    }, []);

    return (
	<>
	    <div> Produto de id {productId}: </div>
	    <div> {JSON.stringify(product)} </div>
	</>
    );
};

export default ProductDetailsPage;
