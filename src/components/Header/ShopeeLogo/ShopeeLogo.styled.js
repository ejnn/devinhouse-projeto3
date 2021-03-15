import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

export const SShopeeLogo = styled.h1`
  color: ${props => props.theme.colors.primary};
  ${props => props.theme.theme == "darkTheme" && css`
  background: ${props => props.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `}
  font-weight: 700;
  font-size: max(2vw, 32px);
  letter-spacing: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  @media (max-width: 650px) {
    flex-grow: 1;
    margin: 0;
    text-align: center;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 650px) {
    flex-grow: 1;
    padding: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  outline: none;
  border-radius: 54px;
`;
