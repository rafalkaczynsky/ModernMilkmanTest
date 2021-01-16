import React from "react";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store";
import * as serviceWorker from "./serviceWorkerRegistration";
import { CircularProgress } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<PersistGate
			loading={<CircularProgress size={200} color="primary" />}
			persistor={persistor}
		>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</PersistGate>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
