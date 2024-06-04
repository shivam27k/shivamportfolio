import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavBar = () => {
	const NavLinkComponent = ({ path, title }) => {
		return (
			<NavLink
				to={path}
				className={({ isActive }) =>
					isActive ? 'text-blue-500' : 'text-black'
				}
			>
				{title}
			</NavLink>
		)
	}

	NavLinkComponent.propTypes = {
		path: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}

	return (
		<header className="header">
			<NavLink
				to="/"
				end
				className="w-10 h-10 rounded-lg bg-white justify-center items-center flex font-bold shadow-md"
			>
				<p className="blue-gradient_text">SK</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLinkComponent path="/about" title="About" />
				<NavLinkComponent path="/projects" title="Projects" />
			</nav>
		</header>
	)
}

export default NavBar
