import { Link } from "react-router-dom";

import styled from "styled-components";

export const ShoppingCartWrapper = styled(Link)`
  background: ${props => props.theme.colors.fainted};
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.1s all ease-out;
  flex-shrink: 0;
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