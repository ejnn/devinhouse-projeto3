import styled from "styled-components";

export const SSearchButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-shrink: 0;
width: 60%;
margin: 4px 24px;
height: 44px;
padding: 10px 32px;
border-radius: 54px;
box-sizing: border-box;
height: 100%;
border: 1px solid #00000000;
background-color: ${props => props.theme.colors.lightGray};
:focus-within {
border: 1px solid ${props => props.theme.colors.primary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
&:hover {
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;

export const Input = styled.input`
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
