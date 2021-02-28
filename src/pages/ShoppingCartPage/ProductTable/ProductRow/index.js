import { useSelector } from "react-redux";

import { itemCountSelector } from "redux/slices/shoppingCart";
import Row from "../Row";
import Price from "components/Price";
import ItemPurchaseButton from "components/ItemPurchaseButton";

import { SProductTitle } from "./ProductRow.styled";


const ProductRow = ({ productData }) => {

    const amountInCart = useSelector(itemCountSelector(productData.id));

    return (
	<Row>
	    <SProductTitle> {productData.name} </SProductTitle>
	    <Price>{productData.price}</Price>
	    <ItemPurchaseButton itemData={productData}/>
	    <Price>{productData.price * amountInCart}</Price>
	</Row>
    );
};

export default ProductRow;
