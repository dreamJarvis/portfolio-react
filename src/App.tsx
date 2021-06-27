/** @format */

import { Box } from "@material-ui/core";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import About from "./Pages/about";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Skills from "./Pages/skills";
import SideBar from "./utils/sideBar";

import Particles from "./ParticleBackground";

function App() {
	return (
		<Box>
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/skills' component={Skills} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
			</BrowserRouter>
		</Box>
	);
}

export default App;
