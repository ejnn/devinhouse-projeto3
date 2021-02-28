import { useHistory } from "react-router-dom";

import ItemPurchaseButton from "components/ItemPurchaseButton";
import PriceAndInstallment from "components/PriceAndInstallment";

import {
  CardWrapper,
  Title,
  ImageWrapper,
  ProductImage,
} from "./ProductCard.styled";

export default function ProductCard({ itemData }) {
  const history = useHistory();
  const redirectToDetailedPage = () => history.push(`/detalhes/${itemData.id}`);
  
  return (
    <CardWrapper>
      <ImageWrapper onClick={redirectToDetailedPage}>
        <ProductImage src={itemData.image} alt="Imagem do Produto" />
      </ImageWrapper>
      <Title to={`/detalhes/${itemData.id}`}><h3>{itemData.name}</h3></Title>
      <PriceAndInstallment price={itemData.price}/>
      <ItemPurchaseButton itemData={itemData} />
    </CardWrapper>
  );
}
