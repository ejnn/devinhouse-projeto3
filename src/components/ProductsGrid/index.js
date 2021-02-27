import {SProductsGrid} from "./ProductsGrid.styled";
import ProductCard from "components/ProductCard";

export default function ProductsGrid({productsList}) {
    return (
        <SProductsGrid>
            {productsList.map((itemData) => (
                <ProductCard key={itemData.id} itemData={itemData}/>
            ))}
        </SProductsGrid>
    )
}
