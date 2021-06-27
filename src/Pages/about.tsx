/** @format */

import React from "react";

import ProfilePic from "../assets/Images/selfiee.jpeg";

export default function about() {
	return (
		<div className='about'>
			<div className='container'>
				<div className='details'>
					<h2>Hello</h2>
				</div>
				<div className='profile-img'>
					<div className='image'>
						<img src={ProfilePic} alt='profile pic' />
					</div>
				</div>
			</div>
		</div>
	);
}
