import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import {
    productDetailsDataSelector,
    fetchProductDetailsData,
    fetchProductDetailsDataStatusSelector,
} from "redux/slices/shopee";

const ProductDetailsPage = ({ productId }) => {

    const dispatch = useDispatch();

    const product = useSelector(productDetailsDataSelector());
    const fetchStatus = useSelector(fetchProductDetailsDataStatusSelector());

    useEffect(() => {
	dispatch(fetchProductDetailsData(productId));
    }, []);

    return (
	<>
	    <div> fetchProductDetailsData status: {fetchStatus} </div>
	    { fetchStatus == "pending"
	      ? "~ here be skeletons ~"
	      :<div>
	     	   <div> {product.name} </div>
	     	   <div> {product.description} </div>
	       </div>
	    }
	</>
    );
};

export default ProductDetailsPage;
