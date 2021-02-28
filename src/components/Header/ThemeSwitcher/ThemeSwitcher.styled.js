import styled from 'styled-components';

export const SThemeSwitcher = styled.button`
  border-radius: 50%;
  width: 52px;
  height: 52px;
  border: 1px;
  font-size: 2.5rem;
  background: #0000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
  outline: none;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 0px 2px #00000050;
  }
`;
