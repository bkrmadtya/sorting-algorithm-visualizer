import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import styles from '../../styles/pages/Home/MainPanel.module.scss'

// components
import Legend from './Legend'
import { Header } from '../shared'

// utils
import { BarStatus } from '../../utils'
import { getColorMode } from '../../store/slice/sorting'


const getLegends = (colorMode: boolean) => {
  if (colorMode) {
    return (Object.keys(BarStatus) as Array<keyof typeof BarStatus>).map(
      (status): BarStatus => BarStatus[status]
    )
  }
  return [BarStatus.UNSORTED, BarStatus.SORTED]
}

const LegendContainer = () => {
  const colorMode = useSelector(getColorMode);
  const legends = useMemo(() => getLegends(colorMode), [colorMode])
  return (
    <div className={styles.legendContainer}>
      <Header className={styles.header}>Legends</Header>
      {legends.map(l => (
        <Legend key={l} type={l} />
      ))}
    </div>
  )
}

export default React.memo(LegendContainer)
