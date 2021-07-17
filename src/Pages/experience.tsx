/** @format */

import React from "react";

export default function Experience() {
	return (
		<div className='experience'>
			{/* <div className='heading'>
				<h2>Experience</h2>
			</div>
			<div className='experiences'>
				<div className='exp exp-1'>
					<div className='period'>
						<span>3/1/21 - 12/2/21</span>
					</div>
					<div className='buffer'></div>
					<div className='about-work'>
						<div className='org-name'>
							<h2>
								Freelancing <span>(React Developer)</span>
							</h2>
						</div>
						<div className='work-desc'>
							<p>
								Worked with clients to develop full-stack websites. Using
								technologies and frameworks like reactjs, redux, MaterialUI, for
								the front-end, and nodejs, expressjs and MySQL for the backend.
							</p>
						</div>
					</div>
				</div>
				<div className='exp exp-2'>
					<div className='about-work'>
						<div className='org-name'>
							<h2>
								ITech missons <span>(Solutions Developer)</span>
							</h2>
						</div>
						<div className='work-desc'>
							<p>
								Worked on large scaled projects, handled the data flow from
								backend and visualizing it onto the front-end using Angular.
								Used technologies such as Angular, typescript, nodejs,
								expressjs, jquery, MongoDB.
							</p>
						</div>
					</div>
					<div className='buffer'></div>
					<div className='period'>
						<span>6/3/21 - 30/4/21</span>
					</div>
				</div>
				<div className='exp exp-3'>
					<div className='period'>
						<span>3/5/21 - current</span>
					</div>
					<div className='about-work'>
						<div className='org-name'>
							<h2>
								Minus O2 <span>(Flutter Developer)</span>
							</h2>
						</div>
						<div className='work-desc'>
							<p>
								Builded the E-commerce Mobile App for android and ios using
								Flutter. Handled backend data using Firebase Functionalities and
								services
							</p>
						</div>
					</div>
				</div>
			</div> */}

			<div className='box'>
				<div className='experience'>
					<div className='heading'>
						<h2>Experience</h2>
					</div>
					<div className='experiences'>
						<div className='exp exp-1'>
							<div className='period'>
								<span>3/1/21 - 12/2/21</span>
							</div>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>Freelancing</h2>
											<h3>React Developer</h3>
										</div>
									</div>

									<div className='face face2'>
										<div className='content'>
											<p>
												Worked with clients to develop full-stack websites.
												Using technologies and frameworks like reactjs, redux,
												MaterialUI, for the front-end, and nodejs, expressjs and
												MySQL for the backend.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='exp exp-2'>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>ITech missons</h2>
											<h3>Solutions Developer</h3>
										</div>
									</div>

									<div className='face face3'>
										<div className='content'>
											<p>
												Worked on large scaled projects, handled the data flow
												from backend and visualizing it onto the front-end using
												Angular. Used technologies such as Angular, typescript,
												nodejs, expressjs, jquery, MongoDB.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='period'>
								<span>6/3/21 - 30/4/21</span>
							</div>
						</div>
						<div className='exp exp-3'>
							<div className='period'>
								<span>3/5/21 - current</span>
							</div>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>Minus O2</h2>
											<h3>Flutter Developer</h3>
										</div>
									</div>

									<div className='face face2'>
										<div className='content'>
											<p>
												Builded the E-commerce Mobile App for android and ios
												using Flutter. Handled backend data using Firebase
												Functionalities and services
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
