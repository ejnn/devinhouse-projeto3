import { useSelector } from "react-redux";

import {
    cartedItemsSelector
} from "redux/slices/shoppingCart";

const ShoppingCartPage = ({}) => {

    const cartedItems = useSelector(cartedItemsSelector());

    return (
	<div> carted items: {JSON.stringify(cartedItems)} </div>
    );
};

export default ShoppingCartPage;
