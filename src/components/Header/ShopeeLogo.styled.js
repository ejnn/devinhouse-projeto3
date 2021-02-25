import styled from "styled-components";

export const ShopeeLogo = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: max(2vw, 32px);
  letter-spacing: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: unset;
  text-decoration: none;
  transition: 0.1s all ease-out;
  &:active {
    transform: scale(0.9)
  }
`;

export default ShopeeLogo