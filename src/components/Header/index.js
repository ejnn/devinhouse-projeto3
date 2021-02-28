import ShoppingCartButton from "./ShoppingCartButton";
import SearchBar from "./SearchBar";
import ShopeeLogo from "./ShopeeLogo";
import ThemeSwitcher from './ThemeSwitcher';

import { StyledHeader, RightSideWrapper } from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <ShopeeLogo />
      <RightSideWrapper>
        <SearchBar />
        <ThemeSwitcher />
        <ShoppingCartButton />
      </RightSideWrapper>
    </StyledHeader>
  );
}
