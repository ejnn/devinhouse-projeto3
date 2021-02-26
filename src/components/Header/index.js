import StyledHeader from './Header.styled'
import styled from 'styled-components'
import ShoppingCartButton from './ShoppingCartButton'
import SearchBar from './SearchBar'
import ShopeeLogo from './ShopeeLogo'

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media (max-width: 600px) {
  width: 100%;
  justify-content: center;
  }
}
`;

export default function Header() {
  return (
    <StyledHeader>
      <ShopeeLogo />
      <RightHeader>
        <SearchBar />
        <ShoppingCartButton />
      </RightHeader>
    </StyledHeader>
  )
}
