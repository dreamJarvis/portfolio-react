/** @format */

import React, { useState } from "react";
import AI_MLProjects from "./Projects/AI_MLProjects";
import FlutterProjects from "./Projects/flutterProjects";

import WebDevProjects from "./Projects/wedDevProjects";

export default function Projects() {
	let [currentProjectOption, setCurrentProjectOption] = useState(0);

	let projectsOptions = [
		<WebDevProjects />,
		<FlutterProjects />,
		<AI_MLProjects />,
	];

	return (
		<div className='projects'>
			<div className='project-heading'>
				<h2>My Recent Work</h2>
				<p>Here are a few projects i've worked on recently.</p>
			</div>
			<div className='viewing-options'>
				<ul>
					<li>
						<span onClick={() => setCurrentProjectOption(0)}>Web</span>
					</li>
					{/* <li>
						<span onClick={() => setCurrentProjectOption(1)}>Mobile</span>
					</li> */}
					<li>
						<span onClick={() => setCurrentProjectOption(2)}>AI/ML</span>
					</li>
				</ul>
			</div>
			<div className='project-list'>
				{projectsOptions[currentProjectOption]}
			</div>
		</div>
	);
}
