import styled from "styled-components";

export const SProductsGrid = styled.div`
    display: block;
    width: 100%
`;

export const ProductsWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const CentralizerWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100%;
`;