/** @format */
import { useEffect } from "react";
import Particles from "../ParticleBackground";

// adding typewriteer effect
class TypeWriter {
	txtElement: any;
	words: any;
	txt: string;
	wordIndex: number;
	wait: number;
	isDeleting: boolean;
	constructor(txtElement: Element | null, words: string, wait: any = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = "";
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}
	// Typing method
	type() {
		const currentIndex = this.wordIndex % this.words.length;
		const fullTxt = this.words[currentIndex];

		this.txt = this.isDeleting
			? fullTxt.substring(0, this.txt.length - 1)
			: fullTxt.substring(0, this.txt.length + 1);

		this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

		// initial typeSpeed
		let typeSpeed = 300;

		// if deleting half, the typing speed
		typeSpeed = this.isDeleting ? typeSpeed / 2 : typeSpeed;

		// make it blink here
		if (!this.isDeleting && this.txt === fullTxt) {
			typeSpeed = this.wait;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.wordIndex++;
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}

// initilize app
function init() {
	const txtElement = document.querySelector(".txt-type")! as any;
	const words = JSON.parse(txtElement.getAttribute("data-words"));
	const wait = txtElement.getAttribute("data-wait")!;

	// initialize typoewriter
	new TypeWriter(txtElement, words, wait);
}

export default function Home() {
	useEffect(() => {
		// initialize the typing when Dom content is loaded
		init();
	}, []);

	return (
		<div className='home-container'>
			<div className='home'>
				<div className='container'>
					<div className='home-desc'>
						<h2 className='home-heading'>
							<blockquote>
								<h1>
									Hello, I'm <span className='highlight'>Tarun Jha</span> <br />
									I am a
									<span
										className='txt-type'
										data-wait='3000'
										data-words='[" Software Developer.", " Front End Web Developer.", 
										" Flutter Developer."]'></span>
									<span className='typing'>|</span>
								</h1>
							</blockquote>
						</h2>
					</div>
				</div>
			</div>
			<Particles />
		</div>
	);
}
