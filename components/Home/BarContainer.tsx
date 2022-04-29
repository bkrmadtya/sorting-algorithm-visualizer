import React from 'react'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

// components
import BarComponent from './Bar'

// utils
import { Bar } from '../../utils'

interface IProps {
  step: Bar[]
}

const BarContainer: React.FC<IProps> = ({ step }: IProps) => {
  return (
    <div className={styles.barContainer}>
      {step.map(a => (
        <BarComponent key={a.value} value={a.value} status={a.status} />
      ))}
    </div>
  )
}

export default BarContainer
