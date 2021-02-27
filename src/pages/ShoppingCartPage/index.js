import ProductTableWrapper from "components/Cart/ProductTableWrapper";
import { SContent } from "components/Cart/ShoppingCartPage.styled";
import { useSelector } from "react-redux";

import {
    cartedItemsSelector
} from "redux/slices/shoppingCart";

const ShoppingCartPage = ({ }) => {

  const cartedItems = useSelector(cartedItemsSelector());

  return (
    <SContent>
      <ProductTableWrapper items={cartedItems} />
    </SContent>
  );
};

export default ShoppingCartPage;
