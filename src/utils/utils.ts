import Images from "../assets";

export const generateSessionId = (len: number): string => {
	var str = ""; // String result
	for (var i = 0; i < len; i++) {
		// Loop `len` times
		var rand = Math.floor(Math.random() * 62); // random: 0..61
		var charCode = (rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48); // Get correct charCode
		str += String.fromCharCode(charCode); // add Character to str
	}
	return str;
};

export const getImage = (category: string): string => {
	const newCategory: string = category.replace(" ", "").toLowerCase();
	return Images[newCategory];
};

export const getStockStatus = (stock: number): string => {
	if (stock === 0) {
		return "outofstock";
	} else if (stock < 10) {
		return "fewleft";
	} else {
		return "ok";
	}
};

