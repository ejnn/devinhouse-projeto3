import { ShoppingCartWrapper, Notifications } from './ShoppingCartButton.styled'
import CartIcon from 'assets/shopping cart icon.svg'
import { useSelector } from "react-redux";
import { distinctItemsCountSelector } from 'redux/slices/shoppingCart';

export default function ShoppingCartButton(props) {
  const items = useSelector(distinctItemsCountSelector());
  
  return (
    <ShoppingCartWrapper tabIndex='0' to='/carrinho'>
      <img src={CartIcon} alt="Shopping Cart Icon" />
      {(items > 0) && 
      <Notifications>{items}</Notifications>}
    </ShoppingCartWrapper>
  )
}
