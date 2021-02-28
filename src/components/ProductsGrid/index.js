import ProductCard from "components/ProductsGrid/ProductCard";

import {
  SProductsGrid,
  ProductsWrapper,
  CentralizerWrapper
} from "./ProductsGrid.styled";

export default function ProductsGrid({ itemData }) {
  return (
    <SProductsGrid>
      <ProductsWrapper>
        {itemData.map((itemData) => (
          <CentralizerWrapper key={itemData.id}>
            <ProductCard itemData={itemData} />
          </CentralizerWrapper>
        ))}
      </ProductsWrapper>
    </SProductsGrid>
  )
}
