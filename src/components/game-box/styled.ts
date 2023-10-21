import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${gameConfig.container.maxWidth}px;
    height: ${gameConfig.container.maxHeight}px;
    max-width: ${gameConfig.container.maxWidth}px;
    max-height: ${gameConfig.container.maxHeight}px;
    background-color: #a5f3fc;
    border-radius: ${gameConfig.container.borderRadius}px;
    box-shadow: 0 0 24px 8px #0284c7;
`;
