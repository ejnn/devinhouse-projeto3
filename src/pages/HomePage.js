import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    productsSelector,
    fetchProductsStatusSelector,
    fetchProducts,
} from "redux/slices/shopee";

const HomePage = ({}) => {

    const dispatch = useDispatch();

    const products = useSelector(productsSelector());
    const fetchProductsStatus = useSelector(fetchProductsStatusSelector());

    useEffect(() => {
	dispatch(fetchProducts());
    }, []);
    
    return (
	<>
	    <div> fetch status: {fetchProductsStatus} </div>
	    <div>
		{
		    fetchProductsStatus == "pending"
			? "~ here be skeletons ~"
			: products.map(itemData => <div key={itemData.id}> {itemData.name} </div>)
		}
	    </div>
	</>
    );
};

export default HomePage;
