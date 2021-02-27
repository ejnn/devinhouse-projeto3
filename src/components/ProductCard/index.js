import {
  CardWrapper,
  Title,
  ImageWrapper,
  ProductImage,
} from "./ProductCard.styled";
import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceAndInstallment from "components/PriceAndInstallment";
import { useHistory } from "react-router-dom";

export default function ProductCard({ itemData }) {
  const history = useHistory();
  const redirectToDetailedPage = () => history.push(`/detalhes/${itemData.id}`);
  return (
    <CardWrapper>
      <ImageWrapper onClick={redirectToDetailedPage}>
        <ProductImage src={itemData.image} alt="Product image" />
      </ImageWrapper>
      <Title to={`/detalhes/${itemData.id}`}>{itemData.name}</Title>
      <PriceAndInstallment price={itemData.price}/>
      <ItemPurchaseButton itemData={itemData} />
    </CardWrapper>
  );
}
