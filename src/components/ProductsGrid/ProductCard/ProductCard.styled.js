import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  height: 448px;
  width: 258px;
  border-radius: 7px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 16px 32px 16px;
  &:hover {
    box-shadow: 2px 2px 3px #00000077;
  }
`;

export const Title = styled(Link)`
  height: 48px;
  width: 215px;
  font-size: 18px;
  > * {
    font-size: 18px;
  }
  font-weight: bolder;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

export const ImageWrapper = styled.button`
  display: flex;
  width: 226px;
  height: 226px;
  justify-content: center;
  align-items: center;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  border-radius: 5px;
`;

export const ProductImage = styled.img`
  max-height: 226px;
  max-width: 226px;
  left: 172px;
  top: 200px;
`;