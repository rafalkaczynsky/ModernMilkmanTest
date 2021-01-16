import React, { ReactElement, useEffect, useState } from "react";
import { Grid, AppBar, Typography } from "@material-ui/core";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomeScreen, AboutScreen } from "./containers";

const App = () => (
	<main>
		<Switch>
			<Route path="/" component={HomeScreen} exact />
			<Route path="/about" component={AboutScreen} />
		</Switch>
	</main>
);

export default App;
