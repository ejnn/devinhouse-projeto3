import styled from "styled-components";

/* adicionar css de hover? */
export const CardWrapper = styled.div`
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

export const Image = styled.img`
  height: 226px;
  width: 226px;
  left: 172px;
  top: 200px;
  border-radius: 0px;
  margin-bottom: 20px
`;

export const Title = styled.span`
  height: 48px;
  width: 215px;
  left: 172px;
  top: 442px;
  font-size: 18px;
  font-weight: bolder;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;

  /*   
  max de duas linhas. Truncar dps disso
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const PriceWrapper = styled.div`
  left: 172px;
  top: 506px;
  white-space: nowrap;
  margin-bottom: 20px
`;

export const PriceComplement = styled.span`
  font-size: 14px;
  line-height: 24px;
`;

export const IntegerPartOfPrice = styled.span`
  font-size: 32px;
  line-height: 24px;
`;

export const Parcela = styled.span`
`;
