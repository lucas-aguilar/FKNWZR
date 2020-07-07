import React from 'react';
import { ThemeProvider } from 'styled-components';

import './assets/fonts/fonts.css';

// import { Container } from './styles';
const theme = {
  colors: {
    black: '#333',
    blue: '#43bccd',
    gray: '#d0cece',
    orange: '#f86624',
    purple: '#662e9b',
    red: '#ea3546',
    yellow: '#f9c80e',
  },
  fonts: {
    normal: 'Helvetica',
    pixel: 'PixelDigivolve',
  },
  fontSizes: {
    small: '.80em',
    medium: '1.2em',
    large: '2em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
