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
					<Route exact path='/portfolio-react' component={Home} />
					{/* <Route exact path='/' component={Home} /> */}
					<Route exact path='/portfolio-react/about' component={About} />
					<Route
						exact
						path='/portfolio-react/experience'
						component={Experience}
					/>
					<Route exact path='/portfolio-react/projects' component={Projects} />
					<Route exact path='/portfolio-react/contact' component={Contact} />
				</Switch>
			</BrowserRouter>
		</Box>
	);
}
export default App;
