import styled from 'styled-components'

export const DetailedCardContentWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 7px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 32px;

  background-color: ${props => props.theme.colors.secondLayer};
`

export const SecondHalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;
  height: 226px;
`

export const ProductDescription = styled.h3`
  size: 16px;
  line-height: 24px;
  font-size: 1.5rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 226px;
  height: 226px;
  justify-content: center;
  align-items: center;
`

export const ProductImage = styled.img`
  max-height: 226px;
  max-width: 226px;
  left: 172px;
  top: 200px;
  border-radius: 0px;
`
