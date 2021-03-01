import styled from 'styled-components';

import { ReactComponent as trashIconPath } from "assets/trash icon.svg";

const SAmountControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    width: ${props => props.width || "100%"};
    max-width: 226px;
`;

const STrashIcon = styled(trashIconPath)`
  > * {
    fill: ${props => props.theme.colors.textContrast};
  }
`;

export {
  SAmountControlsWrapper,
  STrashIcon,
};
