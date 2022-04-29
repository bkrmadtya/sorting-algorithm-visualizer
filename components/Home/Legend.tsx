import React from 'react'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

// utils
import { BarStatus } from '../../src/utils'

const Legend: React.FC<{ type: BarStatus }> = ({ type }) => {
  return (
    <div className={styles.legend}>
      <div className={styles.color} style={{ backgroundColor: `var(--${type})` }} />
      <strong>{type}</strong>
    </div>
  )
}

export default Legend
