import React from 'react'

// hooks
import useSort from 'src/hooks/useSort'

// components
import BarContainer from 'src/components/Dashboard/BarContainer'
import Controls from 'src/components/Dashboard/Controls'

// utils
import { ISortingAlgorithm } from 'src/utils/interface'
import { BubbleSort, MergeSort, QuickSort } from 'src/algorithms'

let selectedAlgorithm: ISortingAlgorithm = BubbleSort
selectedAlgorithm = MergeSort
selectedAlgorithm = QuickSort

const MainPanel: React.FC = () => {
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		selectedAlgorithm
	)
	return (
		<div className='mainPanel'>
			<BarContainer steps={state.steps[state.currentStep]} />
			<Controls {...{ sort, cancel, reset, previousStep, nextStep }} />
		</div>
	)
}

export default MainPanel
