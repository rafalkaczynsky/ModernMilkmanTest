import { AppBar } from "@material-ui/core";
import React from "react";

const MainAppBar = () => (
	<AppBar position="sticky" className="App-bar">
		<p className="Header-title">Modern Milkman</p>
	</AppBar>
);

export default React.memo(MainAppBar);