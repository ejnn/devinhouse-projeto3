import SearchIconSVG from 'assets/search icon.svg';
import SSearchIcon from './SearchIcon.styled'

export default function SearchIcon() {
  return (
    <SSearchIcon>
    <img src={SearchIconSVG} alt="Search Icon"/>
    </SSearchIcon>
  )
}
