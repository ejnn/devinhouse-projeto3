import styled from 'styled-components';

export const PageContents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
   max-width: 1200px;
  }
  min-height: 70vh;
`;

export default PageContents;