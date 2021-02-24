import TrashIcon from "assets/trash icon.svg";
import Button from "components/Button.styled";
import BuyButton from "./BuyButton.styled";
import { itemCountSelector, addItem, removeItem } from "redux/slices/shoppingCart";

import { useState } from "react"

export default function Index(props) {
    const { id } = props;

    const [teste, setteste] = useState(0)

    const itemCountInCart = itemCountSelector(id);
    const addInCart = addItem(props);
    const removeFromCart = removeItem(props);

    const content = () => {
        if (teste >= 1) {
            return (<>
                <Button width="44px" onClick={() => setteste(teste - 1)}>
                    {(1 == teste) ? <img src={TrashIcon} alt="Trash Can Icon" /> : <span> - </span>}
                </Button>
                <div> {teste} </div>
                <Button width="44px" onClick={() => setteste(teste + 1)}> + </Button>
            </>);
        } else {
            return <Button onClick={() => setteste(teste + 1)}> Comprar </Button>;
        }
    }
    return (
        <BuyButton>
            {content()}
        </BuyButton>
    );
}
