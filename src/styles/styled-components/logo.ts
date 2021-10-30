import styled from "styled-components";
import { flex_centered, text_gradient } from "../../constants/mixins";

export const Logo = styled.div`
    ${flex_centered("row")}
`;

export const Text = styled.h3`
    margin: 0 20px;
    ${text_gradient()}
`;