import produce from "immer";
import { getProductsApi } from "../api/repositories";
import { Product } from "../models";
// import { convertDogsArray, removeImagesBySubBreed, transformSubreedName } from '../utils/utils';

export enum ProductTypeKeys {
	GET_PRODUCTS_ATTEMPT = "stock/GET_PRODUCTS_ATTEMPT",
	GET_PRODUCTS_SUCCESS = "stock/GET_PRODUCTS_SUCCESS",
	GET_PRODUCTS_FAILED = "stock/GET_PRODUCTS_FAILED",
}

export interface State {
	products: Product[];
	isLoading: boolean;
	error: string;
}

export const ProductsInitialState = {
	products: [],
	isLoading: false,
	error: "",
};

export interface getProductsAttemptAction {
	type: ProductTypeKeys.GET_PRODUCTS_ATTEMPT;
}

export interface getProductsSuccessAction {
	type: ProductTypeKeys.GET_PRODUCTS_SUCCESS;
	payload: Product[];
}

export interface getProductsFailedAction {
	type: ProductTypeKeys.GET_PRODUCTS_FAILED;
	payload: string;
}

export type ProductsActionTypes =
	| getProductsAttemptAction
	| getProductsSuccessAction
	| getProductsFailedAction;

export default function (
	state: State = ProductsInitialState,
	action: ProductsActionTypes
): State {
	return produce(state, (draft) => {
		switch (action.type) {
			case ProductTypeKeys.GET_PRODUCTS_ATTEMPT:
				draft.isLoading = true;
				draft.error = "";
				return draft;
			case ProductTypeKeys.GET_PRODUCTS_SUCCESS:
				draft.isLoading = false;
				draft.error = "";
				draft.products = [...action.payload];
				return draft;
			case ProductTypeKeys.GET_PRODUCTS_FAILED:
				draft.isLoading = false;
				draft.error = action.payload;
				return draft;
		}
	});
}

export const getProducts = () => (dispatch: any) => {
	dispatch({ type: ProductTypeKeys.GET_PRODUCTS_ATTEMPT });

	const dogs = getProductsApi()
		.then((res) => res.json())
		.then((json) => {
            console.log(json)
			dispatch({ type: ProductTypeKeys.GET_PRODUCTS_SUCCESS, payload: json });
			return json;
		})
		.catch((error) => {
			dispatch({
				type: ProductTypeKeys.GET_PRODUCTS_FAILED,
				payload: error.message,
			});
		});
	return dogs;
};
