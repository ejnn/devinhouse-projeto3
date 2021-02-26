import styled from "styled-components";

export const SSearchButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: max(424px, 30%);
height: 44px;
padding: 10px 32px;
border-radius: 54px;
box-sizing: border-box;
height: 100%;
background-color: ${props => props.theme.colors.lightGray};
:focus-within {
border: 1px solid ${props => props.theme.colors.text};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
&:hover {
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;

export default SSearchButton;