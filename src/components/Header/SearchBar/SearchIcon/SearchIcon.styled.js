import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/search icon.svg";

export const SSearchIcon = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
cursor: pointer;
&:hover {
background: ${props => props.theme.colors.fainted};
}
img:active {
  transform: translate(1px, 1px);
}
`;

export const SearchIconSVG = styled(SearchIcon)`
  * {
  fill: ${props => props.theme.colors.primary}
  }`;

export default SSearchIcon;