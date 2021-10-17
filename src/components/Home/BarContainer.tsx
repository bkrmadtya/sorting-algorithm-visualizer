import React from 'react'

// components
import BarComponent from './Bar'

// utils
import { Bar } from '../../utils'

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
