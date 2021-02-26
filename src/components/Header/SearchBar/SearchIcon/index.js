import SearchIconSVG from 'assets/search icon.svg';
import SSearchIcon from './SearchIcon.styled'

export default function SearchIcon({ onClick }) {
  return (
    <SSearchIcon onClick={onClick}>
    <img src={SearchIconSVG} alt="Search Icon"/>
    </SSearchIcon>
  )
}
