
import * as ReactDOM from 'react-dom'; import { StrictMode } from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider >
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);