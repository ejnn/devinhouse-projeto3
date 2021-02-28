import { useState, useEffect } from "react";

import { queryProducts } from "utils/api";

import PageResult from "./PageResult";
import Title from "components/Title";
import PageContents from "components/PageContents";

const SearchResultsPage = ({ query }) => {
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    queryProducts(query).then(res => setFilteredProducts(res))
    setLoading(false)
    
  }, [query])

  console.log("filteredproducts", filteredProducts);
  console.log(loading);
  return (
    <PageContents>
      <Title> Resultados para "{query}" </Title>
      {loading ?
        '~ here be skeletons ~'
         :
        <PageResult filteredProducts={filteredProducts}/>
      }
    </PageContents>
  )
}

export default SearchResultsPage
