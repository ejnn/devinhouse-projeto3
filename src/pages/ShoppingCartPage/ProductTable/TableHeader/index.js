import { SRow } from "../ProductTable.styled";
import {
    SHeaderText,
    SEmptyTag,
} from "./TableHeader.styled";

const TableHeader = ({}) => {

    return (
	<SRow>
	    <SEmptyTag/>
	    <SHeaderText> Preço UN. </SHeaderText>
	    <SHeaderText> Quantidade </SHeaderText>
	    <SHeaderText> Subtotal </SHeaderText>
	</SRow>
    );
}

export default TableHeader;
