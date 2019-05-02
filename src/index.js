import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import GlobalStyles from "./css/globals";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";

const main = (
	<>
		<GlobalStyles />
		<Routes />
	</>
);

ReactDOM.render(main, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
