import styled from 'styled-components';
import { CustomButtonContainer } from '../custom-button/custom-button.styles';

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${props.imageUrl})`};
`;

export const AddToCartButton = styled(CustomButtonContainer)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        ${ImageContainer} {
            opacity: 0.8;
        }

        ${AddToCartButton} {
            display: flex;
        }
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 10%;
`;