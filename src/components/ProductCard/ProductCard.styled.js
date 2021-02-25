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
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
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
  overflow: hidden; 
  
  /*   
  max de duas linhas. Truncar dps disso
  text-overflow: ellipsis;
  white-space: nowrap;*/
`;

export const ProductImage = styled.img`
  height: 226px;
  width: 226px;
  left: 172px;
  top: 200px;
  border-radius: 0px;
`;