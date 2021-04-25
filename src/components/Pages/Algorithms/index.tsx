import React, { useState } from 'react'

// components
import ContentContainer from 'src/components/Pages/Algorithms/ContentContainer'
import {
	BubbleSort,
	BigONotation,
	Definition,
	Measurement,
	MergeSort,
	QuickSort
} from 'src/components/Pages/Algorithms/ContentContainer/Content'
import SideMenus from 'src/components/Pages/Algorithms/SideMenu'

// utils
import { ITableOfContent } from 'src/utils/interface'

console.log(Definition)
const tableOfContent: ITableOfContent[] = [
	{ id: 'definition', title: 'Definition', component: Definition },
	{
		id: 'measurement',
		title: 'Measurement and Efficiency',
		component: Measurement
	},
	{ id: 'big-o-notation', title: 'Big(O) notation', component: BigONotation },
	{ id: 'bubble-sort', title: 'Bubble Sort', component: BubbleSort },
	{ id: 'merge-sort', title: 'Merge Sort', component: MergeSort },
	{ id: 'quick-sort', title: 'Quick Sort', component: QuickSort }
]

const Algorithms: React.FC = () => {
	const [selected, setSelected] = useState('algorithms')

	const handleTabSelection = (title: string) => setSelected(title)

	return (
		<div className='algorithmsPage'>
			<ContentContainer tableOfContent={tableOfContent} />
			<SideMenus
				onClick={handleTabSelection}
				selected={selected}
				tableOfContent={tableOfContent}
			/>
		</div>
	)
}

export default Algorithms
