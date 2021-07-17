/** @format */

import React from "react";

import project1 from "../../assets/Images/speechRecog.png";
import project2 from "../../assets/Images/attendenceSys.jpg";
import project3 from "../../assets/Images/img_recpog.jpg";

const AI_MLProjects = () => {
	return (
		<>
			<div className='card project-1'>
				<div className='front'>
					<img src={project1} />
				</div>
				<div className='back'>
					<div className='back-content project-1'>
						<div className='heading'>
							<h2>Speech Recognition Using NLP</h2>
							<span>
								project is designed to summarize a spoken lecture and give back
								the o/p as text/audio file.
							</span>
							<span>
								Tech-Stack : Python, NLTK library, Google text-to-speech library
								audio o/p.
							</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/speech-recognition-and-summarizer-using-natural-language-processing-NLP'>
								<i className='fab fa-github'></i>
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
							<h2>Attendence System Using Facial Recognition</h2>
							<span>
								It is an attendence system based on facial recognition which
								marks user attence based on the their facial data.
							</span>
							<span>Tech-Stack: Python, CV2, numpy, openpyxl</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/Attendence-System-Using-Facial-Recognition'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className='card project-3'>
				<div className='front'>
					<img src={project3} />
				</div>
				<div className='back'>
					<div className='back-content project-3'>
						<div className='heading'>
							<h2>Speech Embedded Image Recognition System</h2>
							<span>
								Detects face with the help of Facial Recognition and outputs
								them in speech format
							</span>
							<span>Tech-Stack: Python, CV2, NumPy, pyttsx3, openpyxl</span>
						</div>
						<div className='sm'>
							<a href='https://github.com/dreamJarvis/splitwise'>
								<i className='fab fa-github'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AI_MLProjects;
