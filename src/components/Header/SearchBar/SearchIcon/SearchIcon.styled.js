import styled from "styled-components";

export const SSearchIcon = styled.div`
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
transition: 0.1s all ease-out;
&:hover {
background-color: ${props => props.theme.colors.gray};
}
img:active {
  transition: 0.1s all ease-out;
  transform: translate(1px, 1px);
}
`;

export default SSearchIcon;