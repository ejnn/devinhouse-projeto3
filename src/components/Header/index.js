import { StyledHeader, RightSideWrapper } from './Header.styled'
import styled from 'styled-components'
import ShoppingCartButton from './ShoppingCartButton'
import SearchBar from './SearchBar'
import ShopeeLogo from './ShopeeLogo'



export default function Header() {
  return (
    <StyledHeader>
      <ShopeeLogo />
      <RightSideWrapper>
        <SearchBar />
        <ShoppingCartButton />
      </RightSideWrapper>
    </StyledHeader>
  )
}
