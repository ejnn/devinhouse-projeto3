import {
    PriceComplement,
    IntegerPartOfPrice 
} from "./Price.styled";

export default function Price ({ children, fontSize }) {
    const localePrice = children.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    const regexCurrencySymbol = new RegExp("[^0-9,.s]*", "g");
    const currencySymbol = regexCurrencySymbol.exec(localePrice)[0];
    const noSymbolPrice = localePrice.replace(regexCurrencySymbol, ""); 
    const regexPriceValue = new RegExp(".+(?=,)", "g");
    const integerPart = regexPriceValue.exec(noSymbolPrice)[0];
    const decimalPart = noSymbolPrice.replace(regexPriceValue, "");
    return (
    <div>
        <PriceComplement fontSize={fontSize} >{currencySymbol}</PriceComplement>
        <IntegerPartOfPrice fontSize={fontSize} >{integerPart}</IntegerPartOfPrice>
        <PriceComplement fontSize={fontSize} >{decimalPart}</PriceComplement>
    </div>
    );
}
