import styled, {createGlobalStyle} from 'styled-components';
import {BACKGROUND_COLOR_PRIMARY} from './colors';
import OctinCollege from './fonts/octin-college-free.ttf';


export const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND_COLOR_PRIMARY};
        padding: 0;
        margin: 0;
        font-family: OctinCollege;
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