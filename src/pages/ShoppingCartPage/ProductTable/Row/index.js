import { Children } from "react";

import {
    SRow,
    SCentralizedColumn,
    SHorizontallyCentralized,
} from "./Row.styled";

const Row = ({ children }) => {

    return (
	<SRow>
	    {
		children.map((child, index) => {
	    	    if (index == 0) return <SHorizontallyCentralized>{child}</SHorizontallyCentralized>;
	    	    return <SCentralizedColumn key={child.key + index}>{child}</SCentralizedColumn>;
		})
	    }
	</SRow>
    );
};

export default Row;
