import {
	typescript,
	react,
	pricewise,
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
	github,
	linkedin,
	twitter,
	instagram,
	shoppingcart,
	game,
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
	{
		id: 1,
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
]

export const socialLinks = [
	{
		id: 0,
		name: 'GitHub',
		icon: github,
		link: 'https://github.com/shivam27k',
	},
	{
		id: 1,
		name: 'LinkedIn',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/shivam-27k/',
	},
	{
		id: 2,
		name: 'X',
		icon: twitter,
		link: 'https://x.com/shivam2701k',
	},
	{
		id: 3,
		name: 'Instagram',
		icon: instagram,
		link: 'https://x.com/shivam2701k',
	},
]

export const projects = [
	{
		iconUrl: game,
		theme: 'btn-back-green',
		name: 'Land of the Dead',
		description:
			'An offline 3-D action-adventure game designed to provide players with a thrilling and immersive experience.',
		link: 'https://github.com/shivam27k/Land-of-the-Dead',
		deploymentLink: null,
	},
	{
		iconUrl: shoppingcart,
		theme: 'btn-back-red',
		name: 'A Template Website',
		description:
			'A store website template with smooth navigation, animations, and sections for customer reviews, team introductions, and contact.',
		link: 'https://github.com/shivam27k/Regular-Store-Website',
		deploymentLink: 'https://shivam27k.github.io/Regular-Store-Website/',
	},
]
