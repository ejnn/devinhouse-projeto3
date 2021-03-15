import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { ReactComponent as CartIcon } from "assets/shopping cart icon.svg";

export const ShoppingCartWrapper = styled(Link)`
  background: ${props => props.theme.colors.fainted};
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  margin-right: 12px;
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
  outline: none;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 0px 2px #00000050;
  }
`;

export const Notifications = styled.div`
  border-radius: 50%;
  background: #EF4444;
  color: white;
  font-size: 1rem;
  width: 20px; /* trocar tudo pra rem no final */
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SCartIcon = styled(CartIcon)`
${props => props.theme.theme == "darkTheme" && css`
  * {
  fill: url(#MyGradient)
  } 
`}
`;