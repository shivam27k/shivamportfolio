import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences, skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
	const experienceReversed = [...experiences].reverse()
	return (
		<section className="max-container">
			<h1 className="head-text">
				Hello, I'm{' '}
				<span className="blue-gradient_text font-semibold drop-shadow">
					Shivam
				</span>
			</h1>
			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					I'm a full-stack developer with expertise in both web and
					app development, tackling front-end and back-end challenges.
					I leverage technologies like MERN, AWS, Firebase, Flutter
					and many more to bring projects to life.
				</p>
			</div>
			<div className="py-10 flex flex-col">
				<h3 className="subhead-text">My Skills</h3>
				<div className="mt-16 flex flex-wrap gap-12">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="block-container w-20 h-20"
						>
							<div className="btn-back rounded-xl" />
							<div className="btn-front rounded-xl flex justify-center items-center">
								<img
									src={skill.imageUrl}
									alt={skill.name}
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
							<div className="hover-text  btn-back-black text-center rounded-md">
								<p className="text-white">{skill.name}</p>
							</div>
						</div>
					))}
				</div>
				<div className="py-16">
					<h3 className="subhead-text">Work Experience</h3>
					<div className="mt-5 flex flex-col gap-3 text-slate-500">
						<p>
							I have gained invaluable professional experience at
							these esteemed organizations, where I honed my
							skills and contributed to their success. Each role
							has enriched my career, showcasing my dedication and
							adaptability. Below are the details of my impressive
							journey:
						</p>
					</div>
					<div className="mt-12 flex">
						<VerticalTimeline>
							{experienceReversed.map((experience) => (
								<VerticalTimelineElement
									key={`${experience.id}`}
									date={experience.date}
									icon={
										<div className="flex justify-center items-center w-full h-full">
											<img
												src={experience.icon}
												alt={experience.company_name}
												className="w-[60%] h-[60%] object-contain"
											/>
										</div>
									}
									iconStyle={{
										background: experience.iconBg,
									}}
									contentStyle={{
										borderBottom: '8px',
										borderStyle: 'solid',
										borderBottomColor: experience.iconBg,
										boxShadow: 'none',
									}}
								>
									<div>
										<h3 className="text-black text-xl font-poppins font-semibold">
											{experience.title}
										</h3>
										<p
											className="text-black-500 font-medium font-base"
											style={{ margin: 0 }}
										>
											{experience.company_name}
										</p>
									</div>
									<ul className="my-5 list-disc ml-5 space-y-2">
										{experience.points.map(
											(point, index) => (
												<li
													key={`${index}-experience-point`}
													className="text-black-500/50 font-normal pl-1 text-sm"
												>
													{point}
												</li>
											)
										)}
									</ul>
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
					</div>
				</div>
			</div>
			<hr className="border-slate-200" />
			<CTA />
		</section>
	)
}

export default About
