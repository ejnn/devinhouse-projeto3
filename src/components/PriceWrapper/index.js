import {
    Wrapper,
    PriceComplement,
    IntegerPartOfPrice,
    Installment 
} from "./PriceWrapper.styled";

export default function PriceWrapper({ price }) {
    const number = price;
    const localePrice = price.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    const regexCurrencySymbol = new RegExp("[^0-9,.s]*", "g");
    const currencySymbol = regexCurrencySymbol.exec(localePrice)[0];

    const regex = new RegExp(".+(?=,)", "g");
    const integerPart = regex.exec(localePrice)[0];
    const decimalPart = localePrice.replace(regex, "");

    const parcela = (price / 10).toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    return (
        <Wrapper>
            <div>
                <PriceComplement>{currencySymbol}</PriceComplement>
                <IntegerPartOfPrice>{integerPart}</IntegerPartOfPrice>
                <PriceComplement>{decimalPart}</PriceComplement>
            </div>
            <Installment>ou 10x de {parcela}</Installment >
        </Wrapper>
    );
}