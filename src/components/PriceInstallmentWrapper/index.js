import {
    Wrapper,
    Installment 
} from "./PriceInstallmentWrapper.styled";
import Price from 'components/Price';

export default function PriceInstallmentWrapper({ price }) {

    const parcela = (price / 10).toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    return (
        <Wrapper>
            <Price price={price}/>
            <Installment>ou 10x de {parcela}</Installment>
        </Wrapper>
    );
}