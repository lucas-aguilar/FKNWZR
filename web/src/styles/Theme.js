import React from 'react';
import { ThemeProvider } from 'styled-components';

import './fonts.css';

// import { Container } from './styles';
const theme = {
  colors: {
    black: '#333',
    blue: '#43bccd',
    gray: '#d0cece',
    green: '#31c62e',
    lightGray: '#f7f7f7',
    orange: '#f86624',
    purple: '#662e9b',
    red: '#ea3546',
    shadow: '#787878',
    white: '#fff',
    yellow: '#f9c80e',
  },
  fonts: {
    normal: 'Helvetica',
    pixel: 'PixelDigivolve',
  },
  fontSizes: {
    small: '.8em',
    midSmall: '1em',
    medium: '1.2em',
    midLarge: '1.6em',
    large: '2em',
    xl: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
