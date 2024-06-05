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
import { qrusible } from '../assets/images'

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
		title: 'Software Developer',
		company_name: 'Qrusible',
		icon: qrusible,
		iconBg: '#fbc3bc',
		date: 'Aug 2023 - May 2024',
		points: [
			'Revamped outdated code, boosting system performance, efficiency, and robustness for more reliability.',
			'Transformed admin panel with creative data display, enhanced navigation, and streamlined profile comparison.',
			'Introduced a comprehensive points system in the web app, boosting user engagement by 40%.',
			'Developed a web-app using React Native & AWS with GraphQL for scalable data management.',
			'Led re-development of a cross-platform web app with React Native and GlueStack, enhancing UX with optimized architecture and responsive design.',
			' Directed the full lifecycle of a product, including UI design backend architecture with AWS for data storage, and utilized GraphQL to form table and their relations.',
		],
	},
	{
		id: 1,
		title: 'Data Engineer Intern',
		company_name: 'Qrusbile',
		icon: qrusible,
		iconBg: '#fbc3bc',
		date: 'May 2023 - Aug 2023',
		points: [
			'Automated transcript extraction, saving 80-90% time, and mapped extracted data to AWS DynamoDB.',
			'Co-developed React Native app with AWS, real-time sync, and revamped UI/UX for better user experience.',
			'Developed a Resume Converter using PyPDF2 & OpenAI API, mapping extracted data to DynamoDB.',
			'Integrated Google Sheets with AWS DynamoDB using Node.js, Express, and GraphQL, with an intuitive UI for data manipulation.',
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
