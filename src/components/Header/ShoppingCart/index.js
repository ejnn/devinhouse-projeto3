import { ShoppingCartWrapper, Notifications } from './ShoppingCart.styled'
import CartIcon from 'assets/shopping cart icon.svg'
import { useSelector, useDispatch } from "react-redux";
import { addItem, itemCountSelector } from "redux/slices/shoppingCart";

export default function ShoppingCart({ notification, ...props }) {
  const dispatch = useDispatch();

  const addToCart = (x) => dispatch(addItem(x));

  const ae = useSelector((state) => state.shoppingCart.items.length)
  console.log(ae)
  return (
    <ShoppingCartWrapper tabIndex='0'>
      <img width='28px' height='28px' src={CartIcon} alt="Shopping Cart Icon" />
      {ae && <Notifications>{ae}</Notifications>}
    </ShoppingCartWrapper>
  )
}
