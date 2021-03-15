import { SAmountControlsWrapper } from "components/ItemPurchaseButton/ItemPurchaseButton.styled";
import { ImageWrapper } from "components/ProductsGrid/ProductCard/ProductCard.styled";
import {
  DetailedCardContentWrapper,
  SecondHalfWrapper
} from "pages/ProductDetailsPage/DetailedProductCard/DetailedProductCard.styled";
import { GoBackWrapper } from "pages/ProductDetailsPage/GoBackButton/GoBackButton.styled";
import Skeleton from "react-loading-skeleton";
import { STitleDiv } from "./DetailedProductCardSkeleton.styled";

export default function DetailedProductCardSkeleton() {
  return (
    <>
      <STitleDiv>
        <Skeleton width={'90%'} height={58} />
      </STitleDiv>
      <DetailedCardContentWrapper>
        <ImageWrapper>
          <Skeleton width={226} height={226} />
        </ImageWrapper>
        <SecondHalfWrapper>
          <Skeleton width={'90%'} height={40} />
          <Skeleton width={'20%'} height={56} />
          <SAmountControlsWrapper>
            <Skeleton width={226} height={44} />
          </SAmountControlsWrapper>
        </SecondHalfWrapper>
      </DetailedCardContentWrapper>
      <GoBackWrapper>
        <Skeleton width={226} height={44} />
      </GoBackWrapper>
    </>
  )
}
