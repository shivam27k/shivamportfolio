import {
	typescript,
	react,
	pricewise,
	threads,
	nodejs,
	nextjs,
	tailwindcss,
	mongodb,
	html,
	git,
	python,
	aws,
	sass,
	c,
	cpp,
	express,
	linux,
	graphql,
	csharp,
	reactquery,
	unity,
	unreal,
	firebase,
} from '../assets/icons'
import { starbucks, tesla } from '../assets/images'

export const skills = [
	{
		imageUrl: typescript,
		name: 'TypeScript',
		type: 'Frontend',
	},
	{
		imageUrl: react,
		name: 'React JS',
		type: 'Frontend',
	},
	{
		imageUrl: reactquery,
		name: 'React Query',
		type: 'Frontend',
	},
	{
		imageUrl: tailwindcss,
		name: 'Tailwind CSS',
		type: 'Frontend',
	},
	{
		imageUrl: sass,
		name: 'Sass',
		type: 'Frontend',
	},
	{
		imageUrl: html,
		name: 'HTML',
		type: 'Frontend',
	},
	{
		imageUrl: nextjs,
		name: 'Next.js',
		type: 'Frontend',
	},
	{
		imageUrl: nodejs,
		name: 'Node.js',
		type: 'Backend',
	},
	{
		imageUrl: express,
		name: 'Express.js',
		type: 'Backend',
	},
	{
		imageUrl: python,
		name: 'Python',
		type: 'Backend',
	},
	{
		imageUrl: c,
		name: 'C',
		type: 'Backend',
	},
	{
		imageUrl: cpp,
		name: 'C++',
		type: 'Backend',
	},
	{
		imageUrl: csharp,
		name: 'C#',
		type: 'Backend',
	},
	{
		imageUrl: graphql,
		name: 'GraphQL',
		type: 'Backend',
	},
	{
		imageUrl: aws,
		name: 'AWS',
		type: 'Cloud',
	},
	{
		imageUrl: firebase,
		name: 'Firebase',
		type: 'Cloud',
	},
	{
		imageUrl: git,
		name: 'Git',
		type: 'Tools',
	},
	{
		imageUrl: linux,
		name: 'Linux',
		type: 'Tools',
	},
	{
		imageUrl: unity,
		name: 'Unity',
		type: 'Others',
	},
	{
		imageUrl: unreal,
		name: 'Unreal Engine',
		type: 'Others',
	},
	{
		imageUrl: mongodb,
		name: 'MongoDB',
		type: 'Database',
	},
]

export const experiences = [
	{
		id: 0,
		title: 'React.js Developer',
		company_name: 'Starbucks',
		icon: starbucks,
		iconBg: '#accbe1',
		date: 'March 2020 - April 2021',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		id: 1,
		title: 'React Native Developer',
		company_name: 'Tesla',
		icon: tesla,
		iconBg: '#fbc3bc',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
]

export const projects = [
	{
		iconUrl: pricewise,
		theme: 'btn-back-red',
		name: 'Amazon Price Tracker',
		description:
			'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
		link: null,
	},
	{
		iconUrl: threads,
		theme: 'btn-back-green',
		name: 'Full Stack Threads Clone',
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: null,
	},
]
