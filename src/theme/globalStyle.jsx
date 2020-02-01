import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR_PRIMARY } from './colors';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND_COLOR_PRIMARY};
    }
`;

export default GlobalStyle;