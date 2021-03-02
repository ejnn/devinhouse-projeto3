import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { distinctItemsCountSelector } from "redux/slices/shoppingCart";

import { ShoppingCartWrapper, Notifications, SCartIcon } from "./ShoppingCartButton.styled";

export default function ShoppingCartButton(props) {
  const items = useSelector(distinctItemsCountSelector());
  const history = useHistory();
  const onEnter = (event) => {
    if (event.key == 'Enter') {
      history.push('/carrinho')
    }
  }


  return (
    <ShoppingCartWrapper tabIndex='0' to='/carrinho' onKeyPress={onEnter} aria-label="Link para página de carrinho de produtos">
      <SCartIcon />
      {(items > 0) &&
        <Notifications>{items}</Notifications>}
    </ShoppingCartWrapper>
  )
}
