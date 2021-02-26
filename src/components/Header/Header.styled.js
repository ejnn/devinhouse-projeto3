import styled from 'styled-components'

const StyledHeader = styled.div`
  padding: 8px 64px 8px 64px;
  min-height: 70px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  @media (max-width:600px){
    flex-wrap: wrap;
    
`

export default StyledHeader