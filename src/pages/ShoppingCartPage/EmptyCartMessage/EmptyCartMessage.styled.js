import styled from "styled-components";
import { ReactComponent as EmptyCartIconSVG } from "assets/shopping bag warning icon.svg";


export const SEmptyCartWrapper = styled(EmptyCartIconSVG)`
    width: 300px;
    height: 300px;
    > :nth-child(1), > :nth-child(2) {
      fill: ${props => props.theme.colors.placeHolder};
    }
`;

export const EmptyCartMessage = styled.h3`
  font-size: 2rem;
`;
