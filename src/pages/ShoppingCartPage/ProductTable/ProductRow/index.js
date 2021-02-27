import { useSelector } from "react-redux";
import { itemCountSelector } from "redux/slices/shoppingCart";

import Price from "components/Price";
import ItemPurchaseButton from "components/ItemPurchaseButton";

import { SRow } from "../ProductTable.styled";
import { SProductTitle } from "./ProductRow.styled";


const ProductRow = ({ productData }) => {

    const amountInCart = useSelector(itemCountSelector(productData.id));

    return (
	<SRow>
	    <SProductTitle> {productData.name} </SProductTitle>
	    <Price>{productData.price}</Price>
	    <ItemPurchaseButton itemData={productData} />
	    <Price>{productData.price * amountInCart}</Price>
	</SRow>
    );
};

export default ProductRow;
