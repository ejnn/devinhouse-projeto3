import { 
  CardWrapper, 
  Title, 
  ProductImage 
} from "./ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceWrapper from "components/PriceWrapper";

export default function ProductCard({ itemData }) {
  return (
    <CardWrapper>
      <ProductImage src={itemData.image} alt="Product image" />
      <Title>{itemData.name}</Title>
      <PriceWrapper price={itemData.price}/>
      <ItemPurchaseButton itemData={itemData} />
    </CardWrapper>
  );
}