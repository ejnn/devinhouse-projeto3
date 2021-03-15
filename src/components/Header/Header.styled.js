import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 8px 1vw;
  margin-bottom: 24px;
  min-height: 70px;
  width: 100%;
  background: ${(props) => props.theme.colors.secondLayer};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px ${props => props.theme.colors.boxShadow};
  @media (max-width:650px) {
    flex-wrap: wrap;
    width: auto;
    justify-content: center;
  }
`
export const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
`;
