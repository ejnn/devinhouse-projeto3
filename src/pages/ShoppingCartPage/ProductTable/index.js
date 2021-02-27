import { Fragment } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ProductRow from "./ProductRow";
import RowSeparator from "./RowSeparator";

const ProductTable = ({ products }) => {

    return (
	<>
	    <TableHeader/>
	    <TableBody>
		{
		    products.map((productData, index) => {
			if (index == 0) {
			    return <ProductRow key={productData.id} productData={productData}/>;
			} else {
			    return (
				<Fragment key={productData.id}>
				    <RowSeparator/>
				    <ProductRow key={productData.id} productData={productData}/>
				</Fragment>
			    );
			}
		    })
		}
	    </TableBody>
	</>
    );
};

export default ProductTable;
