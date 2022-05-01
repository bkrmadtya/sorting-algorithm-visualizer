import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { BarStatus } from '@/utils'
import { getColorMode } from '@/store/slice/sorting'

import { Header } from '@/components/shared'
import Legend from './Legend'

const getLegends = (colorMode: boolean) => {
  if (colorMode) {
    return (Object.keys(BarStatus) as Array<keyof typeof BarStatus>).map(
      (status): BarStatus => BarStatus[status]
    )
  }
  return [BarStatus.UNSORTED, BarStatus.SORTED]
}

const LegendContainer = () => {
  const colorMode = useSelector(getColorMode)
  const legends = useMemo(() => getLegends(colorMode), [colorMode])
  return (
    <div className='legendContainer'>
      <Header className='legendContainer__header'>Legends</Header>
      {legends.map(l => (
        <Legend key={l} type={l} />
      ))}
    </div>
  )
}

export default memo(LegendContainer)
