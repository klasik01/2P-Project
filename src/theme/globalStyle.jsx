import styled, {createGlobalStyle} from 'styled-components';
import {BACKGROUND_COLOR_PRIMARY} from './colors';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND_COLOR_PRIMARY};
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;


export const Hr = styled.hr`
    color: white;
    background: white;
`;