import { flex_centered } from "../../constants/mixins";
import styled from "styled-components";

export const User = styled.div`
    width: 450px;
    flex: 0 0 auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 700;
    font-size: 1.3em;
`;

export const Icon = styled.span`
    ${flex_centered()}
    margin-right: 15px;
`;

export const Name = styled.span`

`;

export const Body = styled.div`
    min-height: 320px;
    display: flex;
    align-items: center;
`;