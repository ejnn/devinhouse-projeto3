import Row from "../Row";

import {
    SHeaderText,
    SEmptyTag,
} from "./TableHeader.styled";

const TableHeader = ({}) => {

    return (
	<Row>
	    <SEmptyTag/>
	    <SHeaderText> Preço UN. </SHeaderText>
	    <SHeaderText> Quantidade </SHeaderText>
	    <SHeaderText> Subtotal </SHeaderText>
	</Row>
    );
}

export default TableHeader;
