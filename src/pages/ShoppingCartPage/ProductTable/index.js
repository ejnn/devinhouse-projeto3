import { Fragment } from "react";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import ProductRow from "./ProductRow";
import RowSeparator from "./RowSeparator";

import { SProductTable } from './ProductTable.styled'

const ProductTable = ({ products }) => {

  return (
    <SProductTable>
      <TableHeader />
      <TableBody>
        {
          products.map((productData, index) => {
            if (index == 0) {
              return <ProductRow key={productData.id} productData={productData} />;
            } else {
              return (
                <Fragment key={productData.id}>
                  <RowSeparator />
                  <ProductRow key={productData.id} productData={productData} />
                </Fragment>
              );
            }
          })
        }
      </TableBody>
    </SProductTable>
  );
};

export default ProductTable;
