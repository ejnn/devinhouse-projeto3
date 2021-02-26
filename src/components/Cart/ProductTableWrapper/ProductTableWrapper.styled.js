const { default: styled } = require("styled-components");

export const STableHead = styled.table`
  width: 100%;
  padding: 7px;
  td {
    width: 100px;
    white-space: nowrap;
    padding: 15px;
    text-align: center;
    width: 20%;
    font-size: 12px;
    :first-child {
      text-align: left;
      width: 40%;
    }
  }
`;