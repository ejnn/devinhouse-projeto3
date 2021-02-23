import TrashIcon from "assets/trash icon.svg"
import Button from "src/components/Button.styled.js"
import { itemCountSelector, addItem, removeItem } from "redux/slices/shoppingCart";

export default function index(props) {
    const [id] = props;

    const itemCountInCart = itemCountSelector(props.id);
    const addInCart = addItem(props);
    const removeFromCart = removeItem(props);

    return (
        itemCountInCart => 1 ?
            <>
                <Button width="44px" onClick={removeFromCart}>
                    {1 < itemCountInCart} ?
                    <img src={TrashIcon} alt="Trash Can Icon"/> 
                    : -
                </Button>
                <div> itemCountInCart </div>
                <Button width="44px" onClick={addInCart}> + </Button>
            </>
            :
            <Button onClick={addInCart}> Comprar </Button>
    );
}
