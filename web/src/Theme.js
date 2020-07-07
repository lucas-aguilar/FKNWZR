import React from 'react';
import { ThemeProvider } from 'styled-components';

import './assets/fonts/fonts.css';

// import { Container } from './styles';
const theme = {
  colors: {
    yellow: '#f9c80e',
    orange: '#f86624',
    red: '#ea3546',
    purple: '#662e9b',
    blue: '#43bccd',
  },
  fonts: {
    normal: 'Helvetica',
    pixel: 'PixelDigivolve',
  },
  fontSizes: {
    small: '0.75em',
    medium: '1em',
    large: '1.5em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
