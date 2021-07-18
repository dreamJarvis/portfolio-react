/** @format */

import React from "react";

export default function contact() {
	return (
		<div className='contact'>
			<div className='contact-me'>
				<div className='heading'>
					<h2>Contact Me</h2>
				</div>
				<form className='form-data'>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							id='senderEmail'
							aria-describedby='emailHelp'
							placeholder='Enter email'
						/>
					</div>
					<div className='form-group'>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							placeholder='Enter your message'
							rows={7}
							cols={37}></textarea>
					</div>

					<button type='submit' className='submit-btn'>
						Send <span className='material-icons-outlined'></span>
					</button>
				</form>
			</div>
			<div className='connect-with-me'>
				<div className='heading'>
					<h2>Connect With Me</h2>
				</div>
				<div className='socials'>
					<span className='divider'></span>
					<span className='divider-1'></span>
					<div className='social-icons'>
						<a href='https://twitter.com/TarunJh84213950' className='twitter'>
							<i className='fab fa-twitter fa-2x'></i>
						</a>
						<a
							href='https://www.linkedin.com/in/tarun-jha-60242b193/'
							className='linkedIn'>
							<i className='fab fa-linkedin fa-2x'></i>
						</a>
						<a href='https://www.instagram.com/its_t.j__/ ' className='insta'>
							<i className='fab fa-instagram fa-2x'></i>
						</a>
						<a href='https://github.com/dreamJarvis' className='github'>
							<i className='fab fa-github fa-2x'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
