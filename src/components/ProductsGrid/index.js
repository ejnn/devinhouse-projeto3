import ProductCard from "components/ProductsGrid/ProductCard";

import { SProductsGrid, ProductsWrapper, CentralizerWrapper } from "./ProductsGrid.styled";

export default function ProductsGrid({ itemData }) {
    return (
        <SProductsGrid>
          <ProductsWrapper>
            {itemData.map((itemData) => (
              <CentralizerWrapper>
                <ProductCard key={itemData.id} itemData={itemData}/>
              </CentralizerWrapper>
            ))}
          </ProductsWrapper>
        </SProductsGrid>
    )
}
