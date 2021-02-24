import { 
    DetailCardWrapper, 
    ImageWrapper, 
    Image, 
    DescriptionWrapper 
} from "./ProductDetailCard.styled";

import ItemPurchaseButton from "components/ItemPurchaseButton"

import React from 'react'

export default function ProductDetailCard({data}) {
    return (
        <DetailCardWrapper>
            <ImageWrapper>
                <Image />
            </ImageWrapper>
            <DescriptionWrapper>

            </DescriptionWrapper>
        </DetailCardWrapper>
    )
}
