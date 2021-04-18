import React from 'react'

// components
import {
	SidePanel,
	MainPanel,
	BottomPanel
} from 'src/components/Dashboard/Panels'

const DashBoard: React.FC = () => {
	return (
		<div className='dashboard'>
			<SidePanel />
			<MainPanel />
			<BottomPanel />
		</div>
	)
}

export default DashBoard
