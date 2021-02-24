import {
    DetailCardWrapper,
    ImageWrapper,
    Image,
    DescriptionWrapper
} from "./ProductDetailCard.styled";

import ItemPurchaseButton from "components/ItemPurchaseButton"

import React from 'react'

export default function ProductDetailCard({ data }) {

    const number = data.price;
    const localePrice = number.toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    const regexCurrencySymbol = new RegExp("[^0-9,.s]*", "g");
    const currencySymbol = regexCurrencySymbol.exec(localePrice)[0];

    const regex = new RegExp(".+(?=,)", "g");
    const integerPart = regex.exec(localePrice)[0];
    const decimalPart = localePrice.replace(regex, "");


    const parcela = (data.price / 10).toLocaleString("pt-BR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
    });

    return (
        <ProductDetailCardWrapper>
            <Image src={data.image} alt="Product image" />
            <DetailWrapper>
                <DescriptionWrapper>data.description</DescriptionWrapper>
                <PriceWrapper>
                    <div>
                        <PriceComplement>{currencySymbol}</PriceComplement>
                        <IntegerPartOfPrice>{integerPart}</IntegerPartOfPrice>
                        <PriceComplement>{decimalPart}</PriceComplement>
                    </div>
                    <Parcela>ou 10x de {parcela}</Parcela>
                </PriceWrapper>
                <ItemPurchaseButton itemData={data} />
            </DetailWrapper>
        </ProductDetailCardWrapper>
    )
}
