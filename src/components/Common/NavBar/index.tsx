import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// components
import { Header } from '../'

interface IProps {
	children?: React.ReactNode
}

const NavBar: React.FC<IProps> = ({ children }) => {
	return (
		<div className='navbar'>
			<Header className='navbar__header'>
				<Link to='/'>SORTING ALGORITHM VISUALIZER</Link>
			</Header>
			<div className='navbar__content'>{children}</div>
		</div>
	)
}

export default NavBar
