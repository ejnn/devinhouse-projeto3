import {
    Wrapper,
    Installment 
} from "./PriceAndInstallment.styled";
import Price from 'components/Price';

export default function PriceAndInstallment({ price }) {

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