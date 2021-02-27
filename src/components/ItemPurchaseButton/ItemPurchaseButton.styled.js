import styled from 'styled-components';

import trashIconPath from "assets/trash icon.svg";

import Button from "components/Button";

const SSingleButton = styled(Button)`
`;

const SAmountControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    width: ${props => props.width || "100%"};
    max-width: 226px;
`;

const SChangeAmountButton = styled(Button)`
    max-width: 3rem;
`;

const STrashIcon = ({ }) => <img src={trashIconPath} alt="Trash icon" />;

export {
  SSingleButton,
  SAmountControlsWrapper,
  SChangeAmountButton,
  STrashIcon,
};
