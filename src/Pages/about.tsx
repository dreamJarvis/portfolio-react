/** @format */
import React from "react";

import ProfilePic from "../assets/Images/selfiee.jpeg";
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

export default function about() {
	return (
		<div className='about'>
			<div className='profile-header'>
				<div className='profile-heading'>
					<div className='profile-img'>
						<div className='image'>
							<img src={ProfilePic} alt='profile pic' />
						</div>
					</div>
					<div className='profile-quote'>
						<q>Code is there to explain the comments to the computer</q>
						<span>- Andy Harris</span>
					</div>
				</div>
				<div className='profile-content'>
					<div className='profile-content-container'>
						<p>
							I'm a software developer. I have worked web and mobile
							development, but picking up a new framework or language isn't a
							problem . I am a passionate problem solver and I have a thorough
							understanding of Algorithms and Data Structures.
						</p>
					</div>
				</div>
			</div>
			<div className='tech-stack'>
				<div className='tech-heading'>
					<ul id='tech-list'>
						<li>
							<span className='highlight'>t</span>
						</li>
						<li>
							<span className='highlight'>e</span>
						</li>
						<li>
							<span className='highlight'>c</span>
						</li>
						<li>
							<span className='highlight'>h</span>
						</li>
						<li>
							<span>
								<br />
							</span>
						</li>
						<li>
							<span>s</span>
						</li>
						<li>
							<span>t</span>
						</li>
						<li>
							<span>a</span>
						</li>
						<li>
							<span>c</span>
						</li>
						<li>
							<span>k</span>
						</li>
					</ul>
				</div>
				<div className='tech-content'>
					<div className='tech-images-cards'>
						<img src={reactLogo} alt='react logo' />
						<img src={flutterLogo} alt='flutter logo' />
						<img src={jsLogo} alt='js logo' />
						<img src={tsLogo} alt='ts logo' />
						<img src={htmlLogo} alt='html logo' />
						<img src={cssLogo} alt='css logo' />
						<img src={scssLogo} alt='scss logo' />
						<img src={matcssLogo} alt='materialize css logo' />
						<img src={materialLogo} alt='MaterialUI logo' />
						<img src={bootstrapLogo} alt='bootstrap logo' />
						<img src={cppLogo} alt='cpp logo' />
						<img src={dartLogo} alt='dart logo' />
						<img src={gitLogo} alt='github logo' />
					</div>
				</div>
			</div>
		</div>
	);
}
