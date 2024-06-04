import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
	return (
		<div className="info-box  w-1/4">
			<p className="font-medium sm:text-xl text-center">{text}</p>
			<Link to={link} className="neo-brutalism-white neo-btn border-2">
				{btnText}
				<img
					src={arrow}
					alt="arrow-right"
					className="w-4 h-4 object-contain"
				/>
			</Link>
		</div>
	)
}

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I am <span className="font-semibold">Shivam</span>👋
			<br />A Software Developer from{' '}
			<span className="font-semibold">India!</span>
		</h1>
	),
	2: (
		<InfoBox
			text={'Get to know me better!'}
			link={'/about'}
			btnText={'Learn about me!'}
		/>
	),
	3: (
		<InfoBox
			text={'See my awesome projects!'}
			link={'/projects'}
			btnText={'See my projects!'}
		/>
	),
	4: (
		<InfoBox
			text={'Want to get in touch?'}
			link={'/contact'}
			btnText={'Contact me!'}
		/>
	),
}

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null
}

export default HomeInfo
