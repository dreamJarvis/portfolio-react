/** @format */

import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

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
			<SideBar />
			<Switch>
				<Route path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/skills' component={Skills} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
			</Switch>
			<Particles />
		</Box>
	);
}

export default App;
