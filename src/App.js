import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRoutes from "./routes/index";
import store from "./store";

import GlobalStyle from "./styles/global";
import Theme from "./styles/Theme";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <HashRouter>
          <AppRoutes />
          <GlobalStyle />
        </HashRouter>
      </Theme>
    </Provider>
  );
}

export default App;
