import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/index';
import history from './services/history';

import GlobalStyle from './styles/global';
import Theme from './styles/Theme';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Theme>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Theme>
  );
}

export default App;
