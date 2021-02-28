import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import SearchIcon from 'components/Header/SearchBar/SearchIcon';

import { SSearchButton, Input } from './SearchBar.styled';

export default function SearchBar() {
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
      <Input placeholder='Buscar...' aria-label="Text field for search" ref={textSearch} onKeyPress={searchOnEnter} />
      <SearchIcon onClick={goToSearchPage} />
    </SSearchButton>
  )
}
