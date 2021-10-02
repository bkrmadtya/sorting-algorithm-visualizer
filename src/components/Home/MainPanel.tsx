import React from 'react'

// hooks
import { useSelector } from 'react-redux'
import useSort from '../../hooks/useSort'

// components
import BarContainer from './BarContainer'
import Controls from './Controls'
import LegendContainer from './LegendContainer'
import OptionContainer from './OptionContainer'

// utils
import { BarStatus } from '../../utils'
import { RootState } from 'src/store'


const legends = (Object.keys(BarStatus) as Array<keyof typeof BarStatus>)
  .map((status): BarStatus => BarStatus[status]);

const MainPanel: React.FC = () => {
  const { selectedAlgorithm } = useSelector((state: RootState) => state.algorithm)
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
