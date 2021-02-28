import { useState, useEffect } from "react";

import { queryProducts } from "utils/api";

import ProductsGrid from "components/ProductsGrid";
import Title from "components/Title";
import PageContents from "components/PageContents";
import EmptyResultMessage from "components/EmptyResultMessage";

const SearchResultsPage = ({ query }) => {
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    queryProducts(query).then(res => setFilteredProducts(res))
    setLoading(false)
    
  }, [query])

  console.log("filteredproducts", filteredProducts);
  
  const pageResult = () => {
    if (filteredProducts.length != 0) {
      return <ProductsGrid itemData={filteredProducts} />
    } else {
      return <EmptyResultMessage>Nenhum resultado encontrado para esta busca.</EmptyResultMessage>
    }
    console.log("chamou")
  }

  return (
    <PageContents>
      <Title> Resultados para "{query}" </Title>
      {loading ? (
        '~ here be skeletons ~'
      ) : (
        pageResult()
        //<ProductsGrid itemData={filteredProducts} />
      )}
    </PageContents>
  )
}

export default SearchResultsPage
