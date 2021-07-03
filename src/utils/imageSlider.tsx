/** @format */

import React, { useEffect } from "react";

import reduxLogo from "../assets/Images/redux.jpg";
import jsLogo from "../assets/Images/jslogo.png";
import tsLogo from "../assets/Images/ts.svg";
import htmlLogo from "../assets/Images/html5.png";
import cssLogo from "../assets/Images/css3.jpg";
import scssLogo from "../assets/Images/scss.png";
import reactLogo from "../assets/Images/react.jpg";
import flutterLogo from "../assets/Images/flutter.png";
import dartLogo from "../assets/Images/Dart-logo.png";
import cppLogo from "../assets/Images/c++.png";
import gitLogo from "../assets/Images/git.png";
import materialLogo from "../assets/Images/Materialui.jpeg";
import bootstrapLogo from "../assets/Images/bootstrap-social-logo.png";
import matcssLogo from "../assets/Images/matcss-min.png";

function setImageSliderAutoMode() {
	var counter = 1;
	setInterval(() => {
		let radioBtns = document.getElementById(
			"radio" + counter
		)! as HTMLInputElement;
		radioBtns.checked = true;
		counter++;
		if (counter > 3) counter = 1;
	}, 5000);
}

export default function ImageSlider() {
	useEffect(() => {
		setImageSliderAutoMode();
	}, []);

	return (
		<div className='slider'>
			<div className='slides'>
				<input type='radio' name='radio-btn' id='radio1' />
				<input type='radio' name='radio-btn' id='radio2' />
				<input type='radio' name='radio-btn' id='radio3' />

				<div className='slide first'>
					<div className='img-set'>
						<img src={reactLogo} />
						<img src={reduxLogo} />
						<img src={jsLogo} />
						<img src={tsLogo} />
						<img src={htmlLogo} />
						<img src={cssLogo} />
					</div>
				</div>
				<div className='slide second'>
					<div className='img-set'>
						<img src={scssLogo} />
						<img src={materialLogo} />
						<img src={bootstrapLogo} />
						<img src={matcssLogo} />
						<img src={flutterLogo} />
						<img src={dartLogo} />
					</div>
				</div>
				<div className='slide third'>
					<div className='img-set'>
						<img src={gitLogo} />
						<img src={cppLogo} />
					</div>
				</div>

				<div className='navigation-auto'>
					<div className='auto-btn1'></div>
					<div className='auto-btn2'></div>
					<div className='auto-btn3'></div>
				</div>
			</div>

			<div className='navigation-manual'>
				<label htmlFor='radio1' className='manual-btn'></label>
				<label htmlFor='radio2' className='manual-btn'></label>
				<label htmlFor='radio3' className='manual-btn'></label>
			</div>
		</div>
	);
}
