import styled from "styled-components";

const SRow = styled.div`
display: grid;
grid-template-columns: 2.5fr 1fr 1fr 1fr;
margin: 12px 0;
`;

const SCentralizedColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const SHorizontallyCentralized = styled.div`
display: flex;
align-items: center;
`;

export {
  SRow,
  SCentralizedColumn,
  SHorizontallyCentralized,
};
