import { useDispatch, useSelector } from "react-redux";
import {
  totalPriceSelector,
  resetCart,
} from "redux/slices/shoppingCart.js";

import { SCheckoutControlsWrapper } from "./CheckoutControls.styled";

import Price from "components/Price";
import Button from "components/Button";

const CheckoutControls = ({ }) => {

  const dispatch = useDispatch();

  const totalPrice = useSelector(totalPriceSelector());
  const completePurchase = () => {
    window.alert("A compra foi processada com sucesso, obrigado!");
    dispatch(resetCart());
  };

  return (
    <SCheckoutControlsWrapper>
      <Price fontSize='4rem'>{totalPrice}</Price>
      <Button onClick={completePurchase}>Finalizar Compra</Button>
    </SCheckoutControlsWrapper>
  );
};

export default CheckoutControls;
