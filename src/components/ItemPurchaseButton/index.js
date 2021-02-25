import { useSelector, useDispatch } from "react-redux";
import { itemCountSelector, addItem, removeItem } from "redux/slices/shoppingCart";

import {
  SSingleButton,
  SAmountControlsWrapper,
  SChangeAmountButton,
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
    <SSingleButton onClick={handleClick}>
      Comprar
    </SSingleButton>
  );
};

const ItemAmountControls = ({ handleDecrease, itemAmount, handleIncrease }) => {
  return (
    <SAmountControlsWrapper>
      <SChangeAmountButton onClick={handleDecrease}>
        {
          (itemAmount == 1)
            ? <STrashIcon />
            : "-"
        }
      </SChangeAmountButton>

      <div> {itemAmount} </div>

      <SChangeAmountButton onClick={handleIncrease}> + </SChangeAmountButton>
    </SAmountControlsWrapper>
  );
};

