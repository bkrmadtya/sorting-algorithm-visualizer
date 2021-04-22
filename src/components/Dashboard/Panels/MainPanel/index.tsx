import React from 'react'

// hooks
import useSort from 'src/hooks/useSort'

// components
import BarContainer from 'src/components/Dashboard/BarContainer'
import Controls from 'src/components/Dashboard/Controls'

// utils
import { ISortingAlgorithm } from 'src/utils/interface'
import { BubbleSort, MergeSort, QuickSort } from 'src/algorithms'
import LegendContainer from 'src/components/Dashboard/LegendContainer'
import { BarStatus } from 'src/utils/enum'
import OptionContainer from '../../OptionContainer'

let selectedAlgorithm: ISortingAlgorithm = BubbleSort
selectedAlgorithm = MergeSort
// selectedAlgorithm = QuickSort

const legends = [
	BarStatus.ACTIVE,
	BarStatus.GREATER,
	BarStatus.LESSER,
	BarStatus.PIVOT,
	BarStatus.SORTED,
	BarStatus.UNSORTED
]

const MainPanel: React.FC = () => {
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		selectedAlgorithm
	)
	return (
		<div className='mainPanel'>
			<OptionContainer />
			<BarContainer steps={state.steps[state.currentStep]} />
			<Controls {...{ sort, cancel, reset, previousStep, nextStep }} />
			<LegendContainer legends={legends} />
		</div>
	)
}

export default MainPanel
