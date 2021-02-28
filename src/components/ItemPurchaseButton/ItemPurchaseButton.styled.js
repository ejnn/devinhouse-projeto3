import styled from 'styled-components';

import trashIconPath from "assets/trash icon.svg";

const SAmountControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    width: ${props => props.width || "100%"};
    max-width: 226px;
`;

const STrashIcon = ({ }) => <img src={trashIconPath} alt="Icone da Lixeira" />;

export {
  SAmountControlsWrapper,
  STrashIcon,
};
