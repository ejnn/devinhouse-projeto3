import {
  CardWrapper,
  Title,
  ImageWrapper,
  ProductImage,
} from "components/ProductsGrid/ProductCard/ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceAndInstallment from "components/PriceAndInstallment";
import placeholder from 'assets/placeholder 226x226.png'
import { SProductsGrid, ProductsWrapper } from "components/ProductsGrid/ProductsGrid.styled";
import ProductCard from "components/ProductsGrid/ProductCard";

export default function ProductsGridSkeleton() {
  return (
    <SProductsGrid>
      <ProductsWrapper>
        {[1,2,3,4].map(() => (
          <CardWrapper>
            <ImageWrapper>
              <ProductImage src={placeholder} alt="Product image" />
            </ImageWrapper>
            <Title><h3>Carregando</h3></Title>
            <PriceAndInstallment price={0} />
            <div>botao de comprar</div>
          </CardWrapper>
        ))}
      </ProductsWrapper>
    </SProductsGrid>
  )
}
