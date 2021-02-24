import {
  CardWrapper,
  Image,
  Title,
  PriceWrapper,
  IntegerPartOfPrice,
  DecimalPartOfPrice,
  SubTotal,
} from "./CardWrapper.styled";

export default function Card({ data }) {
  const number = data.price;
  const localePrice = number.toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
  const regex = new RegExp(".+(?=,)", "g");
  const integerPart = regex.exec(localePrice)[0];
  const decimalPart = localePrice.replace(regex, "");

  /* checar se o número mágico 10 é ok ou fazer uma constante*/
  const subTotal = (data.price / 10).toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardWrapper>
      <Image src={data.image} alt="Product image" />
      <Title>{data.name}</Title>
      <PriceWrapper>
        {/* Checar se essa div é ok no meio do componente */}
        <div>
          <IntegerPartOfPrice>{integerPart}</IntegerPartOfPrice>
          <DecimalPartOfPrice>{decimalPart}</DecimalPartOfPrice>
        </div>
        {/* hardcode a parte "ou 10x de"? */}
        <SubTotal>ou 10x de {subTotal}</SubTotal>
      </PriceWrapper>
      {/* Colocar o componente botao aqui*/}
    </CardWrapper>
  );
}
