import { useSelector } from "react-redux";

import { cartedItemsSelector } from "redux/slices/shoppingCart";
import ProductTable from "./ProductTable";
import CheckoutControls from "./CheckoutControls";
import Title from "components/Title";
import PageContents from "components/PageContents";
import EmptyCartWrapper from "./EmptyCartMessage";


const ShoppingCartPage = ({}) => {
  const cartedItems = useSelector(cartedItemsSelector());
  console.log("itens no carrinho:", cartedItems)
  return (
    <PageContents>
      <Title>Carrinho</Title>
      {cartedItems.length > 0 ? (
        <>
        <ProductTable products={cartedItems} />
        <CheckoutControls />
        </>
      ) : (
        <EmptyCartWrapper />
      )}
      
    </PageContents>
  );
};

export default ShoppingCartPage;
