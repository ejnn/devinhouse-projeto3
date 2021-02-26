import { SSearchButton, Input } from './SearchButton.styled';
import SearchIcon from 'components/Header/SearchBar/SearchIcon';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

export default function SearchButton() {
  const textSearch = useRef(null);
  const history = useHistory();

  const goToSearchPage = () => {
    history.push(`/busca/${textSearch.current.value}`)
    textSearch.current.value = '';
  }
  const searchOnEnter = event => {
    if (event.key == 'Enter') {
      goToSearchPage()
    }
  }

  return (
    <SSearchButton>
      <Input placeholder='Buscar...' ref={textSearch} onKeyPress={searchOnEnter} />
      <SearchIcon onClick={goToSearchPage} />
    </SSearchButton>
  )
}
