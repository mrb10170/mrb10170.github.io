import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RootLayout from "./App";
import SecondLayout from "./SecondRoute";

const routes = [
	{
		path: "/second",
		component: SecondLayout
	},
	{
		path: "/",
		component: RootLayout
	}
];

export default () => {
	let routeMap = routes.map((route, i) => {
		return <Route key={i} {...route} />;
	});

	return (
		<Router>
			<Switch>{routeMap}</Switch>
		</Router>
	);
};
