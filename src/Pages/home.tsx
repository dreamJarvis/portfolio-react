/** @format */
import Particles from "../ParticleBackground";

export default function home() {
	return (
		<div className='home-container'>
			<div className='home'>
				<div className='container'>
					<div className='profile-desc'>
						<h2 className='home-heading'>
							<blockquote>
								<h1>
									Hello, I'm <span className='highlight'>Tarun Jha</span> <br />
									I make Web and Mobile Apps.
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
