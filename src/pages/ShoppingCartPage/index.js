import { useSelector } from "react-redux";

import { cartedItemsSelector } from "redux/slices/shoppingCart";

import ProductTable from "./ProductTable";
import CheckoutControls from "./CheckoutControls";
import Title from "components/Title";

const ShoppingCartPage = ({}) => {
  const cartedItems = useSelector(cartedItemsSelector());

  return (
    <>
      <Title>Carrinho</Title>
      <ProductTable products={cartedItems} />
      <CheckoutControls />
    </>
  );
};

export default ShoppingCartPage;
