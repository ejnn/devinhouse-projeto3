import ProductsGrid from "components/ProductsGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    queryProducts,
    queryProductsStatusSelector,
    productsSelector,
} from "redux/slices/shopee";

const SearchResultsPage = ({ query }) => {

    const dispatch = useDispatch();

    const products = useSelector(productsSelector());
    const queryStatus = useSelector(queryProductsStatusSelector());

    useEffect(() => {
	dispatch(queryProducts(query));
    }, [query]);
    
    return (
	<>
	    <div> query for {query} status: {queryStatus} </div>
	    <div>
		{
		    queryStatus == "pending"
			? "~ here be skeletons ~"
			: <ProductsGrid itemData={products} />
		}
	    </div>
	</>
    );
};

export default SearchResultsPage;
