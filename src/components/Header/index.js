import ShoppingCartButton from "./ShoppingCartButton";
import SearchBar from "./SearchBar";
import ShopeeLogo from "./ShopeeLogo";
import ThemeSwitcher from './ThemeSwitcher';
import useWindowSize from 'hooks/useWindowSize';

import { StyledHeader, RightSideWrapper } from "./Header.styled";

export default function Header() {
  const { width } = useWindowSize();

  return (
    <StyledHeader>
      <ShopeeLogo />
      {width > 650
        ? <>
          <SearchBar />
          <RightSideWrapper>
            <ThemeSwitcher />
            <ShoppingCartButton />
          </RightSideWrapper>
        </>
        : <>
          <RightSideWrapper>
            <ThemeSwitcher />
            <ShoppingCartButton />
          </RightSideWrapper>
          <SearchBar />
        </>
      }
    </StyledHeader>
  );
}
