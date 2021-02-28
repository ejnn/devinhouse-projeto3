import EmptyCartIconSVG from "assets/shopping bag warning icon.svg";
import { 
    SEmptyCartWrapper, 
    EmptyCartMessage 
} from "./EmptyCartMessage.styled";

export default function EmptyCartWrapper() {
    return (
        <SEmptyCartWrapper>
            <img src={EmptyCartIconSVG} alt="Aviso Carrinho Vazio"/>
            <EmptyCartMessage>
                Seu carrinho está vazio.
            </EmptyCartMessage>
        </SEmptyCartWrapper>
    );
};
