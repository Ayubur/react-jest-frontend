import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

interface ContainerProps {
    viewPortWidth: number,
    viewPortHeight: number
}

const getCalculatedWidth = (width: number, height: number) => {
    switch (true) {
        case width < gameConfig.container.maxWidth:
            return width;
        case width > gameConfig.container.maxHeight:
            return (9 / 16) * height;
        default:
            return gameConfig.container.maxWidth;
    }
}

const getCalculatedHeight = (width: number, height: number) => {
    switch (true) {
        case width < gameConfig.container.maxWidth:
            return Math.round(width * (16 / 9));
        case width > gameConfig.container.maxHeight:
            return height;
        default:
            return gameConfig.container.maxHeight;
    }
}

export const ContainerStyled = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => getCalculatedWidth(props.viewPortWidth, props.viewPortHeight)}px;
    height: ${props => getCalculatedHeight(props.viewPortWidth, props.viewPortHeight)}px;
    max-width: ${gameConfig.container.maxWidth}px;
    max-height: ${gameConfig.container.maxHeight}px;
    background-color: #a5f3fc;
    border-radius: ${gameConfig.container.borderRadius}px;
    box-shadow: 0 0 24px 8px #0284c7;
`;
