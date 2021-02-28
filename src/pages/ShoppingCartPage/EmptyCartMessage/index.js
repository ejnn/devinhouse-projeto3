import { SEmptyCartWrapper, EmptyCartMessage, EmptyCartImage } from "./EmptyCartMessage.styled";
import EmptyCartIconSVG from "assets/shopping bag warning icon.svg";

export default function EmptyCartWrapper() {
    return (
        <SEmptyCartWrapper>
        
            <EmptyCartImage src={EmptyCartIconSVG} alt="Warnin, empty cart"/>
            <EmptyCartMessage>
                Seu carrinho está vazio.
            </EmptyCartMessage>
        
        </SEmptyCartWrapper>
    );
};
