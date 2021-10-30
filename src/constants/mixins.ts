import Colors from "./colors";

export const flex_centered = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: center;
    align-items: center;
`;

export const flex_start = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: flex-start;
    align-items: center;
`;

export const flex_space_between = (direction?: string) => `
    display: flex;
    flex-direction: ${direction || "row"};
    justify-content: space-between;
    align-items: center;
`;

export const text_gradient = (deg?: number, from?: number, to?: number) => `
    background: linear-gradient(${deg || 180}deg, ${Colors.DARK_BLUE} ${from || 0}%, ${Colors.BLUE} ${to || 100}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const text_ellipsis = (showFull?: boolean) => `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    ${showFull ? 
        `&:hover {
            transition: 400ms ease all;
            background: ${Colors.WHITE};
            box-shadow: 0 0 10px ${Colors.BLACK_01};
            border-radius: 5px;
            white-space: wrap;
            overflow: visible;
            padding: 5px 10px;
            position: absolute;
        }`
        : "" 
    }
`;

export const scale_onhover = (duration?: number, scale?: number) => `
    transition: ${duration || 300}ms ease all;

    &:hover {
        transform: scale(${scale || 0.95});
    }
`; 

export const scale_onclick = (duration?: number, scale?: number) => `
    transition: ${duration || 300}ms ease all;

    &:active {
        transform: scale(${scale || 0.95});
    }
`; 