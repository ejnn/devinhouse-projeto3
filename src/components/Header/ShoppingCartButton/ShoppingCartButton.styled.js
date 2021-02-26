import styled from 'styled-components';
import CartIcon from 'assets/shopping cart icon.svg'
import { Link } from 'react-router-dom'

export const ShoppingCartWrapper = styled(Link)`
  background-color: #EBD7FF;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.1s all ease-out;
  outline: none;
  flex-shrink: 0;
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
  &:focus&:not(:active)&:not(:hover) {
    box-shadow: 0px 0px 0px 1px #8000FF;
  }
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 0px 2px #00000050;
  }
  
`;

export const Notifications = styled.div`
  border-radius: 50%;
  background-color: red;
  color: white;
  font-size: 14px;
  width: 20px; /* trocar tudo pra rem no final */
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;