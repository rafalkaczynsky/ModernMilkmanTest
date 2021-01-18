import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { Grid, AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import "../App.scss";
import { RootState } from "../modules/rootState";


interface AboutScreenProps {
	//.. some about screen props types goes here
}

const AboutScreen = (props: AboutScreenProps): ReactElement => {
	// some screen relatad methods, hooks etc goeas here
	return (
		<div className="App">
			<AppBar position="sticky" className="App-bar">
				<Toolbar className="Tool-bar">
					<Typography variant="h6">Modern Milkman</Typography>
                    <Button color="inherit" href={"/"} style={{position: 'absolute', right: 30}}>
						Home
					</Button>
				</Toolbar>
			</AppBar>
			<Grid container spacing={0} justify={"center"} style={{padding: 20, textAlign: 'justify'}}>
				<h3>About screen</h3>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state: RootState): AboutScreenProps => ({
	//..
});

const mapDispatchToProps = (dispatch: any): AboutScreenProps => ({
	//..
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);
