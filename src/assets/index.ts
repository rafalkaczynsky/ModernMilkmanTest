import bakery from "./bakery.jpeg";
import cereals from "./cereals.jpeg";
import creamery from "./creamery.jpeg";
import christmas from "./christmas.jpeg";
import eggs from "./eggs.jpeg";
import fruitjuice from "./fruitjuice.jpeg";
import household from "./household.jpeg";
import milk from "./milk.jpeg";
import milkshakes from "./milkshakes.jpeg";
import offers from "./offers.jpeg";
import softdrinks from "./softdrinks.jpeg";
import vegboxes from "./vegboxes.jpeg";
import springwater from "./springwater.jpeg";
import banner from './banner.jpg';
import outofstock from './outofstock.png';
import fewleft from './fewleft.png';

interface Map {
	[key: string]: string;
  }
  
const Images: Map = {
	bakery: bakery,
	cereals: cereals,
	creamery: creamery,
	christmas: christmas,
	eggs: eggs,
	fruitjuice: fruitjuice,
	household: household,
	milk: milk,
	milkshakes: milkshakes,
	offers: offers,
	softdrinks: softdrinks,
	vegboxes: vegboxes,
	springwater: springwater,
	banner: banner,
	outofstock: outofstock,
	fewleft: fewleft
};

export default Images;
