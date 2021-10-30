import Colors from '../../constants/colors';
import styled from 'styled-components';
import { text_ellipsis } from '../../constants/mixins';

interface ICellProps {
    ellipsisFull?: boolean;
}

interface ICodeSpaceProps {
    bgColor?: Colors;
    padding?: string;
    fontSize?: string;
    keyWrapperWidth?: string;
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px;
`;

export const KeyWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    font-weight: 500;
    color: ${Colors.GRAY};
`;

export const ValueWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
`;

export const Key = styled.span<ICellProps>`
    z-index: 2;
    ${props => text_ellipsis(props.ellipsisFull || false)}
`;

export const Value = styled.span<ICellProps>`
    z-index: 1;
    margin-left: 20px;
    ${props => text_ellipsis(props.ellipsisFull || false)}
`;

export const CodeSpace = styled.div<ICodeSpaceProps>`
    font-family: 'Fira Code', monospace;
    background: ${props => props.bgColor || Colors.TRANSPARENT};
    border-radius: 10px;
    padding: ${props => props.padding || "0"};
    font-size: ${props => props.fontSize || "0.9em"};
    display: flex;
    flex-direction: column;

    ${KeyWrapper} {
        width: ${props => props.keyWrapperWidth || "200px"};
    }

    ${ValueWrapper} {
        width: calc(100% - ${props => props.keyWrapperWidth || "200px"});
    }
`;