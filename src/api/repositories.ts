import { getProductsUrl } from "./endpoints";

export const getProductsApi = (): Promise<any> => {
	return fetch(getProductsUrl);
};
