import React from 'react'

// components
import { SidePanel, MainPanel, BottomPanel } from './Panels'

const DashBoard: React.FC = () => {
	return (
		<>
			<SidePanel />
			<MainPanel />
			<BottomPanel />
		</>
	)
}

export default DashBoard
