import { flex_centered, scale_onclick } from "../../constants/mixins";
import styled from "styled-components";
import Colors from '../../constants/colors';

interface IButtonProps {
    color?: Colors;
}

interface IButtonsProps {
    display?: string;
    direction?: string;
    margin?: string;
}

export const Button = styled.button<IButtonProps>`
    background: ${props => props.color || Colors.TEAL};
    color: white;
    border-radius: 10px;
    outline: none;
    border: none;
    font-family: inherit;
    padding: 8px 18px;
    font-size: 0.9em;
    font-weight: inherit;
    cursor: pointer;
    box-shadow: 0 0 5px ${Colors.BLACK_04};
    ${scale_onclick(300, 0.95)}
    ${flex_centered("row")}
    transition: 300ms ease transform;

    &:disabled {
        opacity: 0.6;
        transition: unset;
        transform: unset;
        cursor: default;
    }
`;

export const Buttons = styled.div<IButtonsProps>`
    margin: ${props => props.margin || "unset"};

    ${props => props.display === "grid" ? `
        display: ${props.display};

        ${props.direction === "column" ? `
            grid-auto-flow: row;
            row-gap: 20px;`
            : `
            grid-auto-flow: column;
            column-gap: 20px;`}` 
            : props.display === "flex" ? `
        display: ${props.display};
        flex-direction: ${props.direction || "row"};
        
        ${Button} {
            margin-right: 20px;
            
            &:nth-last-child(1) {
                margin-right: 0;
            }
        }
        ` 
        : ``
    }
`;

export const Icon = styled.span`
    color: inherit;
    margin-right: 12px;
    font-size: 1.2em;
    ${flex_centered()}
`;

export const Text = styled.span`
    color: inherit;
`;