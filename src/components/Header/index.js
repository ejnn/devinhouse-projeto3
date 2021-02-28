import ShoppingCartButton from "./ShoppingCartButton";
import SearchBar from "./SearchBar";
import ShopeeLogo from "./ShopeeLogo";

import { StyledHeader, RightSideWrapper } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <ShopeeLogo />
      <RightSideWrapper>
        <SearchBar />
        <ShoppingCartButton />
      </RightSideWrapper>
    </StyledHeader>
  );
}
