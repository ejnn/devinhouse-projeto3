import { useState, useEffect } from 'react'

import { queryProducts } from 'utils/api'

import ProductsGrid from 'components/ProductsGrid'
import Title from 'components/Title'
import PageContents from 'components/PageContents'

const SearchResultsPage = ({ query }) => {
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    queryProducts(query).then(res => setFilteredProducts(res))
    setLoading(false)
  }, [query])

  return (
    <PageContents>
      <Title> Resultados para "{query}" </Title>
      {loading ? (
        '~ here be skeletons ~'
      ) : (
        <ProductsGrid itemData={filteredProducts} />
      )}
    </PageContents>
  )
}

export default SearchResultsPage
