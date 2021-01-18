import { Route, Switch } from "react-router-dom";
import { HomeScreen, AboutScreen } from "./containers";
import "./App.scss";

const App = () => (
	<main>
		<Switch>
			<Route path="/" component={HomeScreen} exact />
			<Route path="/about" component={AboutScreen} />
		</Switch>
	</main>
);

export default App;
