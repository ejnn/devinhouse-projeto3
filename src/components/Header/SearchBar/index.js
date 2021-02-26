import styled from 'styled-components';
import SSearchButton from './SearchButton.styled';
import SearchIcon from 'components/Header/SearchBar/SearchIcon';
import { useHistory } from 'react-router-dom';

const Input = styled.input`
  background-color: ${props => props.theme.colors.lightGray};
  border: 0;
  padding: 0;
  width: 80%;
  height: 40px;
  outline: none;
  ::placeholder {
    color: ${props => props.theme.colors.darkGray};
    font-family: 'roboto';
    font-size: 18px;
  }
`;

export default function SearchButton() {
  const history = useHistory();
  return (
    <SSearchButton>
      <Input type='text' placeholder='Buscar...' onKeyPress={e => { if (e.key == 'Enter') { history.push(`/busca/${e.target.value}`) } } } />
      <SearchIcon />
    </SSearchButton>
  )
}
