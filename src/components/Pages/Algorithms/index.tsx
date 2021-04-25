import React, { useState } from 'react'

// components
import MainContent from 'src/components/Pages/Algorithms/ContentContainer'
import SideMenus from 'src/components/Pages/Algorithms/SideMenu'

// utils
import { ITableOfContent } from 'src/utils/interface'

const tableOfContent: ITableOfContent[] = [
	{ id: 'definition', title: 'Definition' },
	{ id: 'measurement', title: 'Measurement and Efficiency' },
	{ id: 'big-o-notation', title: 'Big(O) notation' },
	{ id: 'bubble-sort', title: 'Bubble Sort' },
	{ id: 'merge-sort', title: 'Merge Sort' },
	{ id: 'quick-sort', title: 'Quick Sort' }
]

const Algorithms: React.FC = () => {
	const [selected, setSelected] = useState('algorithms')

	const handleTabSelection = (title: string) => setSelected(title)

	return (
		<div className='algorithmsPage'>
			<MainContent tableOfContent={tableOfContent} />
			<SideMenus
				onClick={handleTabSelection}
				selected={selected}
				tableOfContent={tableOfContent}
			/>
		</div>
	)
}

export default Algorithms
