import StyledHeader from './Header.styled'
import { Title } from './Title.styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'

const Home = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Home to='/'>
        <Title>Shopee</Title>
      </Home>
      <ShoppingCart />
    </StyledHeader>
  )
}
