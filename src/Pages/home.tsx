/** @format */

import { Box, Container } from "@material-ui/core";
import React from "react";
import ProfilePic from "../assets/Images/selfiee.jpeg";

export default function home() {
	return (
		<div className='home'>
			<div className='profile-img'>
				<div className='image'>
					<img src={ProfilePic} />
				</div>
			</div>
			<div className='profile-desc'>
				<h2 className='home-heading'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
					illo sequi eos commodi harum quis dignissimos dolorem cupiditate
					laborum quidem in minus, cumque saepe totam alias. Temporibus, enim
					aut non nobis itaque, libero ad, consequatur aspernatur laudantium
					nostrum magnam quos!
				</h2>
			</div>
		</div>
	);
}
