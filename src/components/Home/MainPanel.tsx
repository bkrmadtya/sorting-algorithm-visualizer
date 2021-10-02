import React from 'react'

// hooks
import useSort from '../../hooks/useSort'

// components
import BarContainer from './BarContainer'
import Controls from './Controls'
import LegendContainer from './LegendContainer'
import OptionContainer from './OptionContainer'

// utils
import { ISortingAlgorithm, BarStatus } from '../../utils'
import { BubbleSort, MergeSort, QuickSort } from '../../algorithms'

const selectedAlgorithm: ISortingAlgorithm = BubbleSort
// selectedAlgorithm = MergeSort
// selectedAlgorithm = QuickSort

const legends = (Object.keys(BarStatus) as Array<keyof typeof BarStatus>)
  .map((status): BarStatus => BarStatus[status]);

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
