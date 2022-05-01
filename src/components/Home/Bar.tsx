import React from 'react'

import { BarStatus } from '@/utils'

interface IProps {
  value: number
  status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
  const barStyle = {
    height: value * 2,
    backgroundColor: `var(--${status})`
  }
  return <div className='bar' style={barStyle} />
}

export default React.memo(Bar)
