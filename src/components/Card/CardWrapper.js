import styled from "styled-components";
/* alterar para import absoluto */
import placeholder from "../../assets/placeholder 226x226.png";

const CardWrapper = styled.div`
  height: 448px;
  width: 258px;
  left: 156px;
  top: 190px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 226px;
  width: 226px;
  left: 172px;
  top: 200px;
  border-radius: 0px;
`;

const Title = styled.span`
  height: 48px;
  width: 215px;
  left: 172px;
  top: 442px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
/*   
  max de duas linhas. Truncar dps disso
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

const PriceWrapper = styled.div`
height: 24px;
width: 74px;
left: 172px;
top: 506px;
white-space: nowrap;
`

const Price = styled.span`
  font: Roboto;
  font-weight: 500;
  font-style: normal;
  font-size: 32px;
  line-height: 24px;
`;

const DecimalNumber = styled.span`
  font: Roboto;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;

const SubTotal = styled.span`
  font: Roboto;
`;

export default function Card({ data }) {
  const number = data.price;
  const localePrice = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const regex = new RegExp(".+(?=,)", "g");
  const integerPart = regex.exec(localePrice)[0];
  const decimalPart = localePrice.replace(regex, "");

  /* checar sobre o número mágico 10*/
  const subTotal = (data.price /10).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardWrapper>
      <Image src={data.image} alt="Product image" />
      <Title>{data.name}</Title>
      <PriceWrapper>
        <div>
          <Price>{integerPart}</Price>
          <DecimalNumber>{decimalPart}</DecimalNumber>
        </div>
        <SubTotal>ou 10x de {subTotal}</SubTotal>
      </PriceWrapper>
      {/* Colocar o componente botao */}
    </CardWrapper>
  );
}
