import { SSearchIcon, SearchIconSVG } from "./SearchIcon.styled";

export default function SearchIcon({ onClick }) {
  return (
    <SSearchIcon onClick={onClick}>
    <SearchIconSVG />
    </SSearchIcon>
  )
}
