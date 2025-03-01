import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ReactFlowProvider } from "@xyflow/react";
import { GeistProvider } from "@geist-ui/core";
import { Provider } from "react-redux";
import MainRouter from "./routers/MainRouter";
import store from './fullGame/store'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <ReactFlowProvider>
      <GeistProvider>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </GeistProvider>
    </ReactFlowProvider>
  </React.StrictMode>
);

reportWebVitals();
