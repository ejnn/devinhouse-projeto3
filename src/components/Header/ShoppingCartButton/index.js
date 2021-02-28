import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { distinctItemsCountSelector } from "redux/slices/shoppingCart";
import CartIcon from "assets/shopping cart icon.svg";

import { ShoppingCartWrapper, Notifications } from "./ShoppingCartButton.styled";

export default function ShoppingCartButton(props) {
  const items = useSelector(distinctItemsCountSelector());
  const history = useHistory();
  const onEnter = (event) => {
    if (event.key == 'Enter') {
      history.push('/carrinho')
    }
  }


  return (
    <ShoppingCartWrapper tabIndex='0' to='/carrinho' onKeyPress={onEnter} >
      <img src={CartIcon} alt="Icone do Carrinho de Compras" />
      {(items > 0) &&
        <Notifications>{items}</Notifications>}
    </ShoppingCartWrapper>
  )
}
