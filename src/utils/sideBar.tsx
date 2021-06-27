/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function SideNavBar() {
	return (
		<div>
			<nav id='side_navbar'>
				<section id='profile'>
					<Link to='/home'>
						<i className='fas fa-home'></i>
					</Link>
				</section>
				<section id='options'>
					<ul id='options_list'>
						<li className='option-item'>
							<Link to='/about'>
								<i className='fas fa-user'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='/skills'>
								<i className='fas fa-terminal'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='/projects'>
								<i className='fas fa-clipboard-list'></i>
							</Link>
						</li>
						<li className='option-item'>
							<Link to='contact'>
								<i className='fas fa-envelope'></i>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</div>
	);
}
