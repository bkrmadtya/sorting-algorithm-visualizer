import React from 'react'
import { Header } from 'src/components/Common'

const SidePanel: React.FC = () => {
	return (
		<div className='sidePanel'>
			<Header className='panelHeader'>Side Panel</Header>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut deleniti,
				iste quos eveniet eligendi enim facilis ullam officiis debitis obcaecati
				voluptatibus, cum incidunt temporibus fugiat dignissimos libero
				assumenda nemo fuga.
			</p>
		</div>
	)
}

export default SidePanel
