import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes/index';
import history from './services/history';
import store from './store';

import GlobalStyle from './styles/global';
import Theme from './styles/Theme';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <HashRouter history={history}>
          <Routes />
          <GlobalStyle />
        </HashRouter>
      </Theme>
    </Provider>
  );
}

export default App;
