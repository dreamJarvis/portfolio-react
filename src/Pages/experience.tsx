/** @format */

export default function Experience() {
	return (
		<div className='experience'>
			<div className='box'>
				<div className='experience'>
					<div className='heading'>
						<h2>Experience</h2>
					</div>
					<div className='experiences'>
						<div className='exp exp-1'>
							<div className='period'>
								<span>07/24 - 03/25</span>
							</div>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>Guidewire</h2>
											<h3>SDE-2</h3>
										</div>
									</div>

									<div className='face face2'>
										<div className='content'>
											<ul>
												<li>
													<small>
														Engineered scalable UI components using TypeScript,
														React.js, and Plasmic, enforcing strict type safety
														and component reusability across 3+ micro-frontend
														modules, reducing UI inconsistencies by ~26%.
													</small>
												</li>
												<li>
													<small>
														Architected and delivered policyholder-facing claim
														management services, streamlining multi-step claim
														workflows into a single-page experience — cutting
														average claim submission time by ~30% and reducing
														support escalations.
													</small>
												</li>
												<li>
													<small>
														Designed and deployed micro-frontend architecture
														using module federation, decoupling monolithic UI
														into independently deployable units, achieving ~25%
														reduction in initial load time and enabling parallel
														team development with zero cross-team deployment
														dependencies.
													</small>
												</li>
												<li>
													<small>
														Championed a Test-Driven Development (TDD) culture
														across the front-end codebase, enforcing a minimum
														80% code coverage requirement as a CI/CD pipeline
														gate using Jest and React Testing Library (RTL) —
														covering unit, integration, and component-level test
														suites across all micro-frontend modules.
													</small>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='experiences'>
						<div className='exp exp-2'>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>VELSERA</h2>
											<h5 style={{ color: "white" }}>
												(formarly known as pierian)
											</h5>
											<h3>SDE-1</h3>
										</div>
									</div>
									<div className='face face3'>
										<div className='content'>
											<ul>
												<li>
													<small>
														As a founding engineer on the company's new product,
														architected and established the base front-end
														framework using React.js and Material UI — defining
														folder structure, component architecture, theming
														system, and coding standards adopted by all
														subsequent engineers on the team.
													</small>
												</li>
												<li>
													<small>
														Built a dynamic JSON-driven rendering engine using
														React JSON Schema Form (RJSF), enabling
														server-controlled UI generation by mapping JSON
														payloads to JSX components at runtime — decoupling
														front-end UI logic from hardcoded templates and
														reducing front-end release cycles for form/UI
														changes.
													</small>
												</li>
												<li>
													<small>
														Implemented Redux for centralized global state
														management, eliminating prop drilling across deeply
														nested component trees (4+ levels), improving code
														maintainability and reducing component re-render
														cycles by enforcing unidirectional data flow.
													</small>
												</li>
												<li>
													<small>
														Integrated Redux Toolkit (RTK Query) for server-side
														data fetching and automated API response caching —
														reducing redundant API calls by ~45%, lowering
														server load, and cutting infrastructure costs by
														minimizing unnecessary round-trips on high-frequency
														endpoints.
													</small>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='period'>
								<span>04/22 - 10/23</span>
							</div>
						</div>
					</div>
					<div className='experiences'>
						<div className='exp exp-1'>
							<div className='period'>
								<span>08/21 - 03/22</span>
							</div>
							<div className='container'>
								<div className='card'>
									<div className='face face1'>
										<div className='content'>
											<h2>GlobalLogic</h2>
											<h5 style={{ color: "white" }}>(a hitachi subidiary)</h5>

											<h3>SDE-1</h3>
										</div>
									</div>
									<div className='face face2'>
										<div className='content'>
											<ul>
												<li>
													<small>
														Developed and maintained full-stack features using
														Java, Spring Boot, and Angular 10+, contributing
														across the entire SDLC — from REST API design to
														component-level front-end implementation for an
														internal Employee Management System serving 1000+
														employees.
													</small>
												</li>
												<li>
													<small>
														Architected and implemented backend microservices
														for Google's Employee Desk platform, following
														domain-driven design (DDD) principles — decomposing
														monolithic services into independently deployable
														units, improving system modularity and reducing
														inter-service coupling.
													</small>
												</li>
												<li>
													<small>
														Optimized REST API performance by introducing
														response caching, pagination, and payload
														compression, reducing average API latency by ~35%
														and improving throughput under peak load conditions.
													</small>
												</li>
												<li>
													<small>
														Deployed and configured AWS EC2 instances with
														in-memory caching layers (e.g., Redis/ElastiCache),
														reducing redundant DB calls by ~40% and improving
														end-to-end response times for high-frequency
														employee data queries.
													</small>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
