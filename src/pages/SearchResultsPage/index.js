import { useState, useEffect } from "react";

import { queryProducts } from "utils/api";

import ProductsGrid from "components/ProductsGrid";
import Title from "components/Title";


const SearchResultsPage = ({ query }) => {

    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
	setLoading(true);
	queryProducts(query).then(res => setFilteredProducts(res));
	setLoading(false);
    }, [query]);
    
    return (
	<>
	    <Title> Resultados para "{query}" </Title>
	    {
		loading
		    ? "~ here be skeletons ~"
		    : <ProductsGrid itemData={filteredProducts} />
	    }
	</>
    );
};

export default SearchResultsPage;
