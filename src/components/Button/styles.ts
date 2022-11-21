import styled, { css } from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #000000;
    border: 1px solid #FFFFFF;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;


    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #000000;

        &:hover {
            opacity: 0.75;
            cursor: pointer;
            background: #151515
        }

        &::after {
            content: '';
            position: absolute;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

`