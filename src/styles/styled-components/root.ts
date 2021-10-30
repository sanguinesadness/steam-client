import styled from 'styled-components';
import Colors from '../../constants/colors';

export const Root = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${Colors.DARK_BLUE};
`;

export const Content = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    padding: 30px 100px;
`;