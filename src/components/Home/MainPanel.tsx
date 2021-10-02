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


const legends = (Object.keys(BarStatus) as Array<keyof typeof BarStatus>)
  .map((status): BarStatus => BarStatus[status]);

const MainPanel: React.FC = () => {
  const { currentStep, steps, sort, reset, cancel, previousStep, nextStep } = useSort()
  return (
    <div className='mainPanel'>
      <OptionContainer />
      <BarContainer steps={steps[currentStep]} />
      <Controls {...{ sort, cancel, reset, previousStep, nextStep }} />
      <LegendContainer legends={legends} />
    </div>
  )
}

export default MainPanel
