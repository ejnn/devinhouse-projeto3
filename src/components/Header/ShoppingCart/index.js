import { ShoppingCartWrapper, Notifications } from 'Components/Header/ShoppingCart/ShoppingCart.styled'

export default function ShoppingCart({ notification, ...props }) {
  return (
    <ShoppingCartWrapper tabIndex='0'>
      <img width='28px' height='28px' src={CartIcon} alt="Shopping Cart Icon" />
      {notification && <Notifications>{notification}</Notifications>}
    </ShoppingCartWrapper>
  )
}
