import {
  CardWrapper,
  Image,
  Title,
  PriceWrapper,
  PriceComplement,
  IntegerPartOfPrice,
  Parcela,
} from "./ProductCard.styled";

import ItemPurchaseButton from "components/ItemPurchaseButton";

export default function ProductCard({ data }) {
  const number = data.price;
  const localePrice = number.toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });

  const regexCurrencySymbol = new RegExp("[^0-9,.s]*", "g");
  const currencySymbol = regexCurrencySymbol.exec(localePrice)[0];

  const regex = new RegExp(".+(?=,)", "g");
  const integerPart = regex.exec(localePrice)[0];
  const decimalPart = localePrice.replace(regex, "");

  const parcela = (data.price / 10).toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardWrapper>
      <Image src={data.image} alt="Product image" />
      <Title>{data.name}</Title>
      <PriceWrapper>
        <div>
          <PriceComplement>{currencySymbol}</PriceComplement>
          <IntegerPartOfPrice>{integerPart}</IntegerPartOfPrice>
          <PriceComplement>{decimalPart}</PriceComplement>
        </div>
        <Parcela>ou 10x de {parcela}</Parcela>
      </PriceWrapper>
      <ItemPurchaseButton itemData={data} />
    </CardWrapper>
  );
}
