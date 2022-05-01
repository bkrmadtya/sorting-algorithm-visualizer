import React from 'react'

import { Bar } from '../../utils'

import BarComponent from './Bar'
interface IProps {
  step: Bar[]
}

const BarContainer: React.FC<IProps> = ({ step }: IProps) => {
  return (
    <div className='barContainer'>
      {step.map(a => (
        <BarComponent key={a.value} value={a.value} status={a.status} />
      ))}
    </div>
  )
}

export default BarContainer
