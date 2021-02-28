import {
  CardWrapper,
  Title,
  ImageWrapper,
} from "components/ProductsGrid/ProductCard/ProductCard.styled";
import { SProductsGrid, ProductsWrapper } from "components/ProductsGrid/ProductsGrid.styled";
import Skeleton from "react-loading-skeleton";
import { PriceWrapper } from './ProductsGridSkeleton.styled.js'

export default function ProductsGridSkeleton() {
  return (
    <SProductsGrid>
      <ProductsWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <CardWrapper>
            <Skeleton width={226} height={226} />
            <Skeleton width={226} height={18} />
            <PriceWrapper><Skeleton width={90} height={25} />
              <Skeleton width={130} height={25} />
            </PriceWrapper>
            <Skeleton width={226} height={44} />
          </CardWrapper>
        ))}
      </ProductsWrapper>
    </SProductsGrid>
  )
}
