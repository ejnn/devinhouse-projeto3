import styled from "styled-components";

const Title = styled.h2`
  font-size: ${props => props.fontSize || '4rem' };
  width: 100%;
  max-width: 1200px;
  padding: 0 0 32px 24px;
  @media (max-width: 650px) {
    padding: 0 12px 24px;
    text-align: center;
  }
`;

export default Title;
