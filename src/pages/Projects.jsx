import { arrow, globe } from '../assets/icons'
import CTA from '../components/CTA'
import { projects } from '../constants'
import { Link } from 'react-router-dom'

const Projects = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				My{' '}
				<span className="blue-gradient_text font-semibold drop-shadow">
					Projects
				</span>
			</h1>
			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					Welcome to my portfolio, a testament to my expertise and
					commitment to excellence in software development. Here,
					you'll find a diverse array of projects that highlight my
					skills and experience. From web applications to mobile apps,
					each project represents a unique problem solved with
					precision and creativity. Take a look around, and let's
					connect to discuss how I can bring value to your team.
				</p>
			</div>
			<div className="flex flex-wrap my-20 gap-16">
				{projects.map((project) => (
					<div className="lg:w-[400px] w-full" key={project.name}>
						<div className="block-container w-12 h-12">
							<div
								className={`btn-black rotate-12 translate-x-1 translate-y-1 h-12 w-12 rounded-xl ${project.theme}`}
							/>
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img
									src={project.iconUrl}
									alt={project.name}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
						<div className="mt-5 flex flex-col justify-between">
							<div className="flex flex-row items-center gap-4">
								<h4 className="text-2xl font-poppins font-semibold">
									{project.name}
								</h4>
								{project.deploymentLink && (
									<a
										href={project.deploymentLink}
										target="_blank"
									>
										<img
											src={globe}
											alt="arrow"
											className="w-6 h-6 object-contain"
										/>
									</a>
								)}
							</div>
							<p className="mt-2 text-slate-500 ">
								{project.description}
							</p>
							<div className="mt-5 flex gap-2 items-center font-poppins">
								<Link
									to={project.link}
									target="_blank"
									rel="noopener rorefferer"
									className="font-semibold text-blue-600"
								>
									Check this out!
								</Link>
								<img
									src={arrow}
									alt="arrow"
									className="w-4 h-4 object-contain"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<hr className="border-slate-200" />
			<CTA />
		</section>
	)
}

export default Projects
