import StyledHeader from './Header.styled'
import { ShopeeLogo } from './ShopeeLogo.styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCartButton from './ShoppingCartButton'
import SearchBar from './SearchBar'

const Home = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Home to='/'>
        <ShopeeLogo>Shopee</ShopeeLogo>
      </Home>
      <SearchBar />
      <ShoppingCartButton />
    </StyledHeader>
  )
}
