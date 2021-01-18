import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { getImage, getStockStatus } from "../utils/utils";
import { ProductData } from "../models";

export interface ProductCardProps {
	productItem: ProductData;
	categoryName: string;
}

const ProductCard = (props: ProductCardProps): ReactElement => {
	const { productItem, categoryName } = props;
	const { amount, key, stock, title, price } = productItem;

	const stockStatus = getStockStatus(stock);
	return (
		<Grid
			key={key}
			item
			xs={6}
			sm={4}
			md={3}
			className="Product-list-responsive-box"
		>
			<div className="Product-list-item">
				<div className="Product-image-box" style={{ position: "relative" }}>
					<img className="Product-item-image" src={getImage(categoryName)} alt={title}/>
					{stockStatus !== "ok" && (
						<img
							style={{
								backgroundColor: "transparent",
								height: stockStatus === "outofstock" ? "50%" : "20%",
								width: stockStatus === "outofstock" ? "auto" : "100%",
								maxWidth: "100%",
								verticalAlign: "middle",
								borderStyle: "none",
								position: "absolute",
								left: 0,
								top: 0,
								zIndex: 10,
							}}
							src={getImage(stockStatus)}
							alt={stockStatus}
						/>
					)}
				</div>
				<div className="Product-item-content">
					<h3 className="Product-item-title">{title}</h3>
					<p className="Product-item-price">
						£{price} {amount}
					</p>
					<a
						className="Product-item-button"
						href="https://www.google.com"
					>
						<p>Buy</p>
					</a>
				</div>
			</div>
		</Grid>
	);
};

export default React.memo(ProductCard);
