import { useSelector, useDispatch } from "react-redux";

import { itemCountSelector, addItem, removeItem } from "redux/slices/shoppingCart";
import Button from "components/Button";

import {
  SAmountControlsWrapper,
  STrashIcon,
} from "./ItemPurchaseButton.styled";

export default function ItemPurchaseButton({ itemData }) {

  const dispatch = useDispatch();

  const amountInCart = useSelector(itemCountSelector(itemData.id));

  const addToCart = () => dispatch(addItem(itemData));
  const removeFromCart = () => dispatch(removeItem(itemData));

  if (amountInCart == 0) {
    return <AddToCartButton handleClick={addToCart} />;
  } else {
    return <ItemAmountControls handleDecrease={removeFromCart}
      itemAmount={amountInCart}
      handleIncrease={addToCart} />;
  }
}

const AddToCartButton = ({ handleClick }) => {
  return (
    <Button onClick={handleClick} aria-label="Botão de Comprar">
      Comprar
    </Button>
  );
};

const ItemAmountControls = ({ handleDecrease, itemAmount, handleIncrease }) => {
  return (
    <SAmountControlsWrapper>
      <Button width='44px' onClick={handleDecrease} 
      aria-label="Botão de Decremento de Produto">
        {
          (itemAmount == 1)
            ? <STrashIcon />
            : "-"
        }
      </Button>

      <div> {itemAmount} </div>

      <Button width='44px' onClick={handleIncrease}
      aria-label="Botão de Incremento de Produto"> + </Button>
    </SAmountControlsWrapper>
  );
};

