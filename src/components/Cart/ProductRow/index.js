import { STBody } from "./ProductRow.styled";

const { default: ItemPurchaseButton } = require("components/ItemPurchaseButton")

const ProductRow = (items) => {
  return (
    <STBody>
      {items.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{/*<Price>{item.price}</Price>*/}</td>
          <td>
             <ItemPurchaseButton itemData={item} /> 
          </td>
          <td>{/*<Price>{item.price}</Price>*/}</td>
        </tr>
      ))}
    </STBody>
  );
}

export default ProductRow;