import { useSelector } from "react-redux";

import { cartedItemsSelector } from "redux/slices/shoppingCart";

const ShoppingCartPage = ({}) => {

    const cartedItems = useSelector(cartedItemsSelector());

    return (
	<div> {JSON.stringify(cartedItems)} </div>
    );
};

export default ShoppingCartPage;
