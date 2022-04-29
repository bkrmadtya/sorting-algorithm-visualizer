import React from 'react'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

// utils
import { BarStatus } from '../../utils'

interface IProps {
  value: number
  status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
  const barStyle = {
    height: value * 2,
    backgroundColor: `var(--${status})`
  }
  return (
    <div className={styles.bar} style={barStyle}>
    </div>
  )
}

export default React.memo(Bar)
