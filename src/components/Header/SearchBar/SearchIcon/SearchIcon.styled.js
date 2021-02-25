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
${'' /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */}
}
img:active {
  transition: 0.1s all ease-out;
  transform: translate(1px, 1px);
}
`;

export default SSearchIcon;