import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import AlertTemplate from "react-alert-template-basic";
import { PersistGate } from "redux-persist/integration/react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const options = {
  timeout: 4000,
  offset: "180px",
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
