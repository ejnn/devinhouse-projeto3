import { useSelector } from "react-redux";
import { totalPriceSelector } from "redux/slices/shoppingCart.js";

import { SCheckoutControlsWrapper } from "./CheckoutControls.styled";

import Price from "components/Price";
import Button from "components/Button";

const CheckoutControls = ({}) => {

    const totalPrice = useSelector(totalPriceSelector());
    
    return (
	<SCheckoutControlsWrapper>
	    <Price>{totalPrice}</Price>
	    <Button>Finalizar Compra</Button>
	</SCheckoutControlsWrapper>
    );
};

export default CheckoutControls;
