import React from 'react'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

// hooks'
import useSort from '../../hooks/useSort'

// components
import BarContainer from './BarContainer'
import Controls from './Controls'
import LegendContainer from './LegendContainer'
import OptionContainer from './OptionContainer'

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
    <div className={styles.mainPanel}>
      <OptionContainer />
      <BarContainer step={steps[currentStep]} />
      <Controls {...{ sort, pause, reset, previousStep, nextStep }} />
      <LegendContainer />
    </div>
  )
}

export default MainPanel
