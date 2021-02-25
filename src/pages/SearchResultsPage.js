import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { queryProducts } from "redux/slices/shopee";

const SearchResultsPage = ({ query }) => {

    const dispatch = useDispatch();

    const [searchResults, setSearchResults] = useState({});

    useEffect(async () => {
	dispatch(queryProducts(query))
	    .then(ret => setSearchResults(ret));
    },[]);
    
    return (
	<>
	    <div> Pesquisa por {query}: </div>
	    <div> {JSON.stringify(searchResults)} </div>
	</>
    );
};

export default SearchResultsPage;
