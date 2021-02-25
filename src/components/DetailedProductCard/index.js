import {
  DetailedCardContentWrapper,
  SecondHalfWrapper,
  ProductDescription,
  ProductImage,
} from "./DetailedProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";

export default function DetailedProductCard({ data }) {
  return (
    <DetailedCardContentWrapper>
      <ProductImage src={data.image} alt="Product image" />
      <SecondHalfWrapper>
        <ProductDescription>{data.description}</ProductDescription>
        <PriceWrapper price={data.price}/>
        <ItemPurchaseButton itemData={data} />
      </SecondHalfWrapper>
    </DetailedCardContentWrapper>
  );
}
