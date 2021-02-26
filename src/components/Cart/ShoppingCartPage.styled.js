const { default: styled } = require("styled-components");

export const SContent = styled.div`
  max-width: 1360px;	
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
  display: table;
  }
  &:after {
    clear: both;
  }
`;