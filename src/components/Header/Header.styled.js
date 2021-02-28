import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 8px 64px 8px 64px;
  margin-bottom: 24px;
  min-height: 70px;
  width: 100%;
  background: ${(props) => props.theme.colors.secondLayer};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px ${props => props.theme.colors.boxShadow};
  @media (max-width:600px) {
    flex-wrap: wrap;
    padding: 12px;
  }
`
export const RightSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
}
`;
