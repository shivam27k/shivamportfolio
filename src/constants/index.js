import {
	typescript,
	react,
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
	data,
	book,
	extension,
	nodewhite,
	grocery,
	loop, nestjs
} from '../assets/icons'
import { qrusible, patrikaLogo } from '../assets/images'

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
		imageUrl: nestjs,
		name: 'NestJs',
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
	{
		id: 2,
		title: 'Software Engineer',
		company_name: 'Rajasthan Patrika',
		icon: patrikaLogo,
		iconBg: '#f9e79f',
		date: 'Aug 2024 - Present',
		points: [
			"Fixed a long-standing issue with web stories by converting them to AMP pages, boosting visibility on Google Discover and increasing monthly views by 107% (from less than 100k to 1.7M).",
			"Improved SEO for Patrika.com, addressing indexability issues, optimizing titles and descriptions, and structuring social metadata, leading to enhanced search rankings and visibility.",
			"Independently developed a scalable ePaper platform for 3.5M+ users using Next.js for the frontend, NestJS middleware to integrate APIs, and AWS Amplify with DynamoDB for user data management.",
			"Made a login system using AWS Cognito, enabling user authentication and profile management.",
			"Enhanced the ePaper with features like a crop tool, user profiles, ad integration, and dynamic access to state editions via a NestJS API fetching data from WordPress.",
			"Replaced an expensive 3rd-party service, saving crores of rupees annually through an in-house solution."
		]
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
		iconUrl: grocery,
		theme: 'btn-back-red',
		name: 'Grocer-E',
		description:
			'Grocer-e is an app for users to order online groceries from their nearby stores and get them delivered to their doorstep.',
		link: 'https://github.com/shivam27k/grocer_e',
		deploymentLink: null,
	},
	{
		iconUrl: loop,
		theme: 'btn-back-blue',
		name: 'Looper',
		description:
			'Looper is a showcase of my abilities and skills in frontend. It contains a website with smooth animations and transitions.',
		link: 'https://github.com/shivam27k/Looper',
		deploymentLink: 'https://shivam27k.github.io/Looper/',
	},
	{
		iconUrl: extension,
		theme: 'btn-back-black',
		name: 'Leads Tracker',
		description:
			'Leads Tracker is a simple but handy Chrome extension that allows users to save URLs for easy access later.',
		link: 'https://github.com/shivam27k/LeadsTracker',
		deploymentLink: null,
	},
	{
		iconUrl: data,
		theme: 'btn-back-yellow',
		name: 'US Accidents Data Analysis',
		description:
			'Analyzing US accident data to uncover trends, causes, and patterns for improved road safety and policy-making.',
		link: 'https://github.com/shivam27k/US-Accidents-DA',
		deploymentLink:
			'https://drive.google.com/file/d/1Wh1vdqheCzF0W40Iuu2xKLRz-XGF39RU/view?usp=sharing',
	},
	{
		iconUrl: nodewhite,
		theme: 'btn-back-red',
		name: 'Product Management API',
		description:
			'This Node.js application serves as an API for managing products. It allows users to perform CRUD operations on products.',
		link: 'https://github.com/shivam27k/node-api-productmanagement',
		deploymentLink: null,
	},
	{
		iconUrl: shoppingcart,
		theme: 'btn-back-orange',
		name: 'A Template Website',
		description:
			'A store website template with smooth navigation, animations, and sections for customer reviews, team introductions, and contact.',
		link: 'https://github.com/shivam27k/Regular-Store-Website',
		deploymentLink: 'https://shivam27k.github.io/Regular-Store-Website/',
	},
	{
		iconUrl: book,
		theme: 'btn-back-pink',
		name: 'MouseTrap - A Book Store',
		description:
			'A book store containing a list of books and their details, with reviews, helping users to buy books accordingly.',
		link: 'https://github.com/shivam27k/MouseTrap',
		deploymentLink: 'https://shivam27k.github.io/MouseTrap/index.html',
	},
]
