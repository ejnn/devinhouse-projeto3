import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const ProductTable = ({ children }) => {

    return (
	<>
	    <TableHeader/>
	    <TableBody>
		{children}
	    </TableBody>
	</>
    );
};

export default ProductTable;
