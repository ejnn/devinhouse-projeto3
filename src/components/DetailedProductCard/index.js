import {
  DetailedCardContentWrapper,
  SecondHalfWrapper,
  ProductDescription,
  ProductImage,
} from "./DetailedProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceAndInstallment from "components/PriceAndInstallment";

export default function DetailedProductCard({ itemData }) {
  return (
    <DetailedCardContentWrapper>
      <ProductImage src={itemData.image} alt="Product image" />
      <SecondHalfWrapper>
        <ProductDescription>{itemData.description}</ProductDescription>
        <PriceAndInstallment price={itemData.price}/>
        <ItemPurchaseButton itemData={itemData} />
      </SecondHalfWrapper>
    </DetailedCardContentWrapper>
  );
}
