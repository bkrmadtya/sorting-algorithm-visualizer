import React from 'react'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

interface IProps {
  sort: () => void
  pause: () => void
  reset: () => void
  previousStep: () => void
  nextStep: () => void
}

const Controls: React.FC<IProps> = ({
  sort,
  pause,
  reset,
  previousStep,
  nextStep
}: IProps) => {
  return (
    <div className={styles.controls}>
      <button onClick={sort}>Sort</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={previousStep}>Previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default Controls
