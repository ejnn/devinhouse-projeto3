import { useState, useEffect } from "react";

import { queryProducts } from "utils/api";

import SearchPageResult from "./SearchPageResult";
import Title from "components/Title";
import PageContents from "components/PageContents";

const SearchResultsPage = ({ query }) => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    queryProducts(query)
      .then(res => setFilteredProducts(res))
      .then(() => setLoading(false));
  }, [query]);

  return (
    <PageContents>
      <Title> Resultados para "{query}" </Title>
      {loading ? (
        "~ here be skeletons ~"
      ) : (
        <SearchPageResult filteredProducts={filteredProducts} />
      )}
    </PageContents>
  );
};

export default SearchResultsPage;
