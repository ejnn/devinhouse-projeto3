import styled from 'styled-components';

const SButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 24px;
  height: 44px;
  color: ${props => props.theme.colors.textContrast};
  background: ${props => props.theme.colors.primary};
  border-radius: 4px;
  border: 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || "100%"};
  max-width: 226px;
  &:hover {
    box-shadow: 2px 2px 3px ${props => props.theme.colors.boxShadow};
  }
  &:focus {
    box-shadow: 2px 2px 3px ${props => props.theme.colors.boxShadow}, 1px 1px 0px 1px ${props => props.theme.colors.primary};
  }
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 0px 2px ${props => props.theme.colors.boxShadow};
  }
`;

export default SButton;
