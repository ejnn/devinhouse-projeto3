import { 
  CardWrapper, 
  Title, 
  ProductImage 
} from "./ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceInstallmentWrapper from "components/PriceInstallmentWrapper";

export default function ProductCard({ itemData }) {
  return (
    <CardWrapper>
      <ProductImage src={itemData.image} alt="Product image" />
      <Title>{itemData.name}</Title>
      <PriceInstallmentWrapper price={itemData.price}/>
      <ItemPurchaseButton itemData={itemData} />
    </CardWrapper>
  );
}
