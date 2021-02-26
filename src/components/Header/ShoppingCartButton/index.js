import { ShoppingCartWrapper, Notifications } from './ShoppingCartButton.styled'
import CartIcon from 'assets/shopping cart icon.svg'
import { useSelector } from "react-redux";
import distinctItemsCountSelector from 'redux/slices/shoppingCart';

export default function ShoppingCartButton({ notification, ...props }) {
  const items = useSelector((state) => state.shoppingCart.items.length);

  console.log(items)
  return (
    <ShoppingCartWrapper tabIndex='0'>
      <img width='28px' height='28px' src={CartIcon} alt="Shopping Cart Icon" />
      {notification && <Notifications>{notification}</Notifications>}
    </ShoppingCartWrapper>
  )
}
