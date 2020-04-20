import styled, {createGlobalStyle} from 'styled-components';
import {BACKGROUND_COLOR_PRIMARY} from './colors';
import Dock from './fonts/FontsFree-Net-urw-dock.ttf';
import DockHeavy from './fonts/FontsFree-Net-urw-dock-bold.ttf';
import DockBoldItalic from './fonts/FontsFree-Net-urw-dock-bold-italic.ttf' ;


export const GlobalStyle = createGlobalStyle`
    body {
        background: ${BACKGROUND_COLOR_PRIMARY};
        padding: 0;
        margin: 0;
        font-family: Dock,sans-serif;
        font-size: 18px;
    }
    h1,h2,h3,h4 {
      text-transform: uppercase;
    }
`;

export const GlobalFonts = createGlobalStyle`    
    @font-face{
      font-family: 'Dock';
      src: local('Dock'), url(${DockBoldItalic}) format('truetype');
      font-weight:700;
      font-style:italic
    }
    
    @font-face{
      font-family:Dock;
      src: local('Dock'), url(${Dock}) format('truetype');
      font-weight:400;
      font-style:normal
    }
    @font-face{
      font-family:Dock;
      src: local('Dock'), url(${DockHeavy}) format('truetype');
      font-weight:700;
      font-style:normal;
    }

`;

export const Hr = styled.hr`
    color: white;
    background: white;
`;