import React, { ReactElement, useEffect, useState } from "react";
import { Grid, AppBar, Typography } from "@material-ui/core";
import "./App.scss";
import { RootState } from "./modules/rootState";
import { getProducts } from "./modules/stock";
import { connect } from "react-redux";
import { Product } from "./models";
import { generateSessionId } from './utils/utils';
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ListItem = () => (
	<Grid item xs={6} sm={4} md={3}>
		<div
			style={{
				alignItems: "center",
				justifyContent: "center",
				padding: 10,
			}}
		>
			<div
				style={{
					width: "100%",
					backgroundColor: "blue",
					height: 200,
				}}
			/>
		</div>
	</Grid>
);

interface MainScreenProps {
	error: string;
	isLoading: boolean;
	products: Product[];
	getProducts: () => Promise<string[]>;
}

const App = (props: MainScreenProps): ReactElement => {
	const {
		getProducts,
		isLoading,
		products,
		error,
	} = props;
	const [refreshing, setRefreshing] = useState<boolean>(false);

	useEffect(() => {
		let data = sessionStorage.getItem("session");
		data ? handleOnRefresh() : handleNewPageLoad();
	}, []);

	const handleOnRefresh = () => {
		getProducts();
	}

	const handleNewPageLoad = () => {
		sessionStorage.setItem("session", generateSessionId(10));
		if (!products.length) {
			getProducts();
		}
	}

	return (
		<div className="App">
			<AppBar position="sticky" className="App-bar">
				<Typography variant="h6">Modern Milkman Test App</Typography>
			</AppBar>

			<Grid container spacing={0} justify={"center"} style={{ padding: 10 }}>
				<Grid item xs={12} md={4} className="Menu-container">
					<div className="Menu-item-container">
						<div className="Menu-item">Item 1</div>
					</div>
					<div className="Menu-item-container">
						<div className="Menu-item">Item 1</div>
					</div>
				</Grid>

				<Grid container item xs={12} md={8} spacing={1}>
					<Grid item xs={12}>
						<div style={{ alignItems: "center", justifyContent: "center" }}>
							<div
								style={{ width: "100%", backgroundColor: "red", height: 200 }}
							/>
						</div>
					</Grid>
					<Grid container item xs={12}>
						{data.map((item) => (
							<ListItem key={item} />
						))}
					</Grid>
				</Grid>
			</Grid>

			<div className="Bottom-app-bar">
				<p>Powered by Rafal Kaczynski - 2021</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	products: state.stock.products,
	error: state.stock.error,
	isLoading: state.stock.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
	getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
