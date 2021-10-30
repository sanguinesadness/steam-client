import Colors from "../../constants/colors";
import styled from "styled-components";

export const Input = styled.input`
    border-radius: 10px;
    outline: none;
    border: 1px solid ${Colors.GRAY};
    padding: 5px 10px;
    font-family: inherit;
    font-size: 0.9em;
    position: relative;
`;