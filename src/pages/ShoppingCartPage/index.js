import { useSelector } from "react-redux";

import { cartedItemsSelector } from "redux/slices/shoppingCart";

import ProductTable from "./ProductTable";
import CheckoutControls from "./CheckoutControls";
import Title from "components/Title";
import PageContents from 'components/PageContents'

const ShoppingCartPage = ({}) => {
  const cartedItems = useSelector(cartedItemsSelector());

  return (
    <PageContents>
      <Title>Carrinho</Title>
      <ProductTable products={cartedItems} />
      <CheckoutControls />
    </PageContents>
  );
};

export default ShoppingCartPage;
