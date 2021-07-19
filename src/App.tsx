/** @format */

import { Box } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import About from "./Pages/about";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Experience from "./Pages/experience";
import SideBar from "./utils/sideBar";

function App() {
	return (
		<Box>
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/experience' component={Experience} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/portfolio-react' component={Home} />
				</Switch>
			</BrowserRouter>
		</Box>
	);
}
export default App;
