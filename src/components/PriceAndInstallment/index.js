import Price from 'components/Price';

import {
    Wrapper,
    Installment 
} from "./PriceAndInstallment.styled";

export default function PriceAndInstallment({ price }) {

    const parcela = (price / 10).toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    return (
        <Wrapper>
            <Price integerDecimalSameSize={false}>{price}</Price>
            <Installment>ou 10x de {parcela}</Installment>
        </Wrapper>
    );
}