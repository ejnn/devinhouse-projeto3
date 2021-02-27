import { SProductsGrid, ProductsWrapper } from "./ProductsGrid.styled";
import ProductCard from "components/ProductCard";

export default function ProductsGrid({ itemData }) {
    return (
        <SProductsGrid>
          <ProductsWrapper>
            {itemData.map((itemData) => (
                <ProductCard key={itemData.id} itemData={itemData}/>
            ))}
          </ProductsWrapper>
        </SProductsGrid>
    )
}
