import { CardWrapper, Title, ProductImage } from "./ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
export default function ProductCard({ data }) {
  return (
    <CardWrapper>
      <ProductImage src={data.image} alt="Product image" />
      <Title>{data.name}</Title>
      <PriceWrapper price={data.price}/>
      <ItemPurchaseButton itemData={data} />
    </CardWrapper>
  );
}
