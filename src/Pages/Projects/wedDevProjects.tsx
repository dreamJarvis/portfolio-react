/** @format */

import React from "react";

import project1 from "../../assets/Images/3d-globe.jpg";
import project2 from "../../assets/Images/cveditor.jpeg";
import project3 from "../../assets/Images/socialMediaApp.png";
import project5 from "../../assets/Images/imdb.png";
import project6 from "../../assets/Images/guy_comp.jpg";
import project7 from "../../assets/Images/notepad.jpg";

const WebDevProjects = () => {
	return (
		<>
			<div className='card project-1'>
				<div className='front'>
					<img src={project3} />
				</div>
				<div className='back'>
					<div className='back-content project-1'>
						<div className='heading'>
							<h2>Social Media App</h2>
							<span>
								This is an full-stack social media app, with all the CRUD
								functionality.
							</span>
							<span>Tech-Stack : ReactJS, MaterialUI, GraphQl, Expressjs</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/social-media-app'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://60c7537058656a0007667159--tender-kirch-792db0.netlify.app/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-2'>
				<div className='front'>
					<img src={project2} />
				</div>
				<div className='back'>
					<div className='back-content project-2'>
						<div className='heading'>
							<h2>Resume Builder</h2>
							<span>
								Build your resume, edit it, or download it into PDF format
							</span>
							<span>Tech-Stack: ReactJS, Redux, TailwindCSS</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/resume-editor'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://dreamjarvis.github.io/resume-editor/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-3'>
				<div className='front'>
					<img src={project1} />
				</div>
				<div className='back'>
					<div className='back-content project-3'>
						<div className='heading'>
							<h2>3d Map Renderer</h2>
							<span>A 3D Map Rendering Web App</span>
							<span>Tech-Stack: ReactJS, Redux</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/3d_map_render/'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://dreamjarvis.github.io/3d_map_render/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-4'>
				<div className='front'>
					<img src={project7} />
				</div>
				<div className='back'>
					<div className='back-content project-4'>
						<div className='heading'>
							<h2>NotePad</h2>
							<span>A Note keeping application.</span>
							<span>Tech-Stack: HTML5, CSS, Bootstrap, JavaScript</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/NotePad'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://dreamjarvis.github.io/NotePad/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-5'>
				<div className='front'>
					<img src={project5} />
				</div>
				<div className='back'>
					<div className='back-content project-5'>
						<div className='heading'>
							<h2>Movie Explorer</h2>
							<span>An Web Application for searching for movies.</span>
							<span>Tech Stack: HTML5, CSS, Javascript, Bootstrap</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/Movie-Info'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://dreamjarvis.github.io/Movie-Info/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-6'>
				<div className='front'>
					<img src={project6} />
				</div>
				<div className='back'>
					<div className='back-content project-6'>
						<div className='heading'>
							<h2>Expense Tracker</h2>
							<span>
								An application to manage and keep track of the daily expenses.
							</span>
							<span>Tech-Stack: HTML5, CSS, JavaScript, Bootstrap</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/ExpenseTracker'>
								<i className='fab fa-github'></i>
							</a>
							<a href='https://dreamjarvis.github.io/ExpenseTracker/'>
								<i className='fas fa-eye'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WebDevProjects;
