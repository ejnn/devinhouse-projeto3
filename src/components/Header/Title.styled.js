import styled from "styled-components";

export const Title = styled.h1`
  color: #8000FF;
  font-weight: 700;
  font-size: 48px;
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

export default Title