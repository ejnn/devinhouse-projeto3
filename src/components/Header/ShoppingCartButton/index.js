import { ShoppingCartWrapper, Notifications } from './ShoppingCartButton.styled'
import CartIcon from 'assets/shopping cart icon.svg'
import { useSelector } from "react-redux";
import { distinctItemsCountSelector } from 'redux/slices/shoppingCart';
import { useHistory } from 'react-router-dom';

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
      <img src={CartIcon} alt="Shopping Cart Icon" />
      {(items > 0) &&
        <Notifications>{items}</Notifications>}
    </ShoppingCartWrapper>
  )
}
