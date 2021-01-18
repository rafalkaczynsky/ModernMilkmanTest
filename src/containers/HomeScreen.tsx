import React, { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { RootState } from "../modules/rootState";
import { getProducts } from "../modules/stock";
import { Product, ProductData } from "../models";
import { generateSessionId } from "../utils/utils";
import { descriptionText } from "../constants";
import "../App.scss";
import { MenuItem, ProductCard, Footer, MainAppBar } from "../components";

interface MainScreenProps {
	error: string;
	isLoading: boolean;
	products: Product[];
	getProducts: () => Promise<string[]>;
}

const HomeScreen = (props: MainScreenProps): ReactElement => {
	const { getProducts, products } = props;
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [categories, setCategories] = useState<string[]>([]);

	const handleOnRefresh = (): void => {
		getProducts();
	};

	const handleNewPageLoad = (): void => {
		sessionStorage.setItem("session", generateSessionId(10));
		if (!products.length) {
			getProducts();
		}
	};

	const onDidMount = () => {
		let data: string | null = sessionStorage.getItem("session");
		data ? handleOnRefresh() : handleNewPageLoad();

		if (products.length) {
			const newCategories: string[] = products.map((product) => product.title);
			setCategories(newCategories);
		}
	};

	useEffect(onDidMount, []);

	const isItemSelected = (cat: string): boolean =>
		cat === selectedCategory ? true : false;

	const renderProducts = (): ReactElement => {
		const selectedProductGroup = products.find(
			(productGroup) => productGroup.title === selectedCategory
		);
		const items =
			selectedProductGroup && selectedProductGroup.data.length
				? selectedProductGroup.data
				: [];
		const categoryName =
			selectedProductGroup && selectedProductGroup.title
				? selectedProductGroup.title
				: "Unknown";

		return (
			<Grid item xs={12} className="Product-list-container">
				{items &&
					items.map((productItem: ProductData) => (
						<ProductCard
							key={productItem.key}
							productItem={productItem}
							categoryName={categoryName}
						/>
					))}
			</Grid>
		);
	};

	const renderBanner = (): ReactElement => (
		<div className="Banner-container">
			<div className="Banner-content">
				<h3>{selectedCategory ? selectedCategory : "No category selected"} </h3>
				<p>
					{selectedCategory
						? descriptionText
						: "Please select category from the list ..."}
				</p>
			</div>
		</div>
	);

	const renderCategoryMenu = (): ReactElement => (
		<ul style={{ marginRight: 30 }}>
			{categories.map((cat) => (
				<MenuItem
					key={cat}
					item={cat}
					onSelect={() => setSelectedCategory(cat)}
					isActive={isItemSelected(cat)}
				/>
			))}
		</ul>
	);

	const renderMainAppBar = (): ReactElement => <MainAppBar />;
	const renderFooter = (): ReactElement => <Footer />;

	const renderContent = (): ReactElement => (
		<Grid container spacing={0} justify={"center"} className="App-content">
			<Grid item xs={12} md={4}>
				{renderCategoryMenu()}
			</Grid>

			<Grid item xs={12} md={8} className="Product-main-container">
				{renderBanner()}
				{renderProducts()}
			</Grid>
		</Grid>
	);

	return (
		<div className="App">
			{renderMainAppBar()}
			{renderContent()}
			{renderFooter()}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
