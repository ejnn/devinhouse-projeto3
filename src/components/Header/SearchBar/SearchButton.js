import styled from 'styled-components';
import SSearchButton from './SearchButton.styled';
import SearchIcon from 'components/Header/SearchBar/SearchIcon';

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
  return (
    <SSearchButton>

      <Input type='text' placeholder='Buscar...' />
      <SearchIcon />
    </SSearchButton>
  )
}
