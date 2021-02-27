import {SProductsGrid} from "./ProductsGrid.styled";
import ProductCard from "components/ProductCard";

export default function ProductsGrid({ itemData }) {
    return (
        <SProductsGrid>
            {itemData.map((itemData) => (
                <ProductCard key={itemData.id} itemData={itemData}/>
            ))}
        </SProductsGrid>
    )
}
