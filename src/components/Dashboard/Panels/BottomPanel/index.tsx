import React from 'react'
import { Header } from 'src/components/Common'

const BottomPanel: React.FC = () => {
	return (
		<div className='bottomPanel'>
			<Header className='panelHeader'>Logs:</Header>
			<Header className='panelHeader'>Array:</Header>
			<Header className='panelHeader'>Active elements:</Header>
			<Header className='panelHeader'>Status:</Header>
		</div>
	)
}

export default BottomPanel
