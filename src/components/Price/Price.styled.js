import styled from "styled-components";

export const PriceComplement = styled.span`
font-size: ${props => ((parseInt(props.fontSize)/2)+'rem') || '14px'};
line-height: 24px;
`;

export const IntegerPartOfPrice = styled.span`
font-size: ${props => props.fontSize || '32px'};
line-height: 24px;
`;