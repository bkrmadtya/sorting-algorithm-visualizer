import React from 'react'

// components
import Legend from './Legend'
import { Header } from '../../../shared'

// utils
import { BarStatus } from '../../../utils'

interface IProps {
  legends: BarStatus[]
}

const LegendContainer: React.FC<IProps> = ({ legends }) => {
  return (
    <div className='legendContainer'>
      <Header className='legendContainer__header'>Legends</Header>
      {legends.map(l => (
        <Legend key={l} type={l} />
      ))}
    </div>
  )
}

export default LegendContainer
