/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function SideNavBar() {
	return (
		<div>
			<nav id='side_navbar'>
				<section id='profile'>
					<Link to='/portfolio-react'>
						<i className='fas fa-home'></i>
					</Link>
				</section>
				<section id='options'>
					<ul id='options_list'>
						<li className='option-item'>
							<Link to='/portfolio-react/about'>
								<i className='fas fa-user'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='/portfolio-react/projects'>
								<i className='fas fa-terminal'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='/portfolio-react/experience'>
								<i className='fas fa-clipboard-list'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='/portfolio-react/contact'>
								<i className='fas fa-envelope'></i>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</div>
	);
}
