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
`;

const Image = styled.img``;

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
`;

const Price = styled.span`
  font: Roboto;
  font-weight: 500;
  font-style: normal;
  font-size: 32px;
  line-height: 24px;
`;

const CurrencyDecimal = styled.span`
  font: Roboto;
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;

export default function Card({ data }) {
  const number = data.price;
  const localePrice = number.toLocaleString("pt-BR", {style: "currency", currency:"BRL"});
  /* Checar como utilizar o splice para dividir a string após a vírgula e passar a variavel para o componente */
  return (
    <CardWrapper>
      <img src={data.image} alt="Product image" />
      <Title>{data.name}</Title>

      <Price>{localePrice} </Price>
      
    </CardWrapper>
  );
}
