import ProductRow from "../ProductRow";
import { SBoxCart, SEmptyCart } from "./ProductTable.styled";

const ProductTable = (items) => {
  console.log('items', items);
  console.log('items2', items.length);
  return (
    <>
      <SBoxCart>
        {items && items.length > 0 &&
          <>
            <table>
              <ProductRow items={items} />
            </table>
          </>
        }
        {items.length === undefined &&
          <SEmptyCart>
            Carrinho Vazio
        </SEmptyCart>
        }
      </SBoxCart>
      {items && items.length > 0 &&
        <>
          {/* <Price />
          <Button>Finalizar</Button> */}
        </>
      }
    </>
  );
}

export default ProductTable;