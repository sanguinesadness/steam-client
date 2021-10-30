import { flex_centered } from "../../constants/mixins";
import styled from "styled-components";
import Colors from "../../constants/colors";

export const Error = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0;
`;

export const Text = styled.span`
    color: ${Colors.RED};
`;

export const Icon = styled.span`
    font-size: 1.5em;
    margin-right: 13px;
    ${flex_centered()}
`;