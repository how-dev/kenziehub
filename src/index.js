import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d405b"
    },
    secondary: {
      main: "#81b29a"
    }
  }
});

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  document.getElementById("root")
);

reportWebVitals();
