import React from 'react'

// hooks'
import useSort from '../../hooks/useSort'

// components
import BarContainer from './BarContainer'
import Controls from './Controls'
import LegendContainer from './LegendContainer'
import OptionContainer from './OptionContainer'

// utils
import { BarStatus } from '../../utils'

const MainPanel: React.FC = () => {
  const {
    currentStep,
    steps,
    sort,
    reset,
    pause,
    previousStep,
    nextStep
  } = useSort()
  return (
    <div className='mainPanel'>
      <OptionContainer />
      <BarContainer step={steps[currentStep]} />
      <Controls {...{ sort, pause, reset, previousStep, nextStep }} />
      <LegendContainer />
    </div>
  )
}

export default MainPanel
