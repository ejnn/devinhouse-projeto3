import { STableHead } from "./ProductTableWrapper.styled";
const { default: ProductTable } = require("../ProductTable")

const ProductTableWrapper = (items) => {
  return (
    <>
      <STableHead>
        <tr>
          <td></td>
          <td>Preço UN.</td>
          <td>Quantidade</td>
          <td>SubTotal</td>
        </tr>
      </STableHead>
      <ProductTable items={items} />
    </>
  );
}

export default ProductTableWrapper;