import styled from "styled-components";
import { Input } from "./defaults";

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;

    & > ${Input} {
        margin-bottom: 20px;
        width: 100%;

        &:nth-last-child(1) {
            margin-bottom: 0;
        }
    }
`;