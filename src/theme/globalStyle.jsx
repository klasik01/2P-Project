import styled, {createGlobalStyle} from 'styled-components';
import {BACKGROUND_COLOR_PRIMARY} from './colors';
import OctinCollege from './fonts/Champagne_Limousines-Thick.ttf';


export const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND_COLOR_PRIMARY};
        padding: 0;
        margin: 0;
        font-family: OctinCollege;
        font-size: 18px;
    }
    h1,h2,h3,h4 {
      text-transform: uppercase;
    }
`;

export const GlobalFonts = createGlobalStyle`
  @font-face {
        font-family: 'OctinCollege';
        src: local('OctinCollege'), local('OctinCollege'),
        url(${OctinCollege}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;

export const Hr = styled.hr`
    color: white;
    background: white;
`;