import Row from "../Row";

import {
  SHeaderText,
  STableHeader
} from "./TableHeader.styled";

const TableHeader = ({ }) => {

  return (
    <STableHeader>
      <Row>
        <div />
        <SHeaderText> Preço UN. </SHeaderText>
        <SHeaderText> Quantidade </SHeaderText>
        <SHeaderText> Subtotal </SHeaderText>
      </Row>
    </STableHeader>
  );
}

export default TableHeader;
