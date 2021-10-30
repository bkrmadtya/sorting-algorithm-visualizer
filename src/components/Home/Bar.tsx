import React, { useRef } from 'react'

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
  // const renderCount = useRef(0)
  return (
    <div className='bar' style={barStyle}>
      {/* {renderCount.current++} */}
    </div>
  )
}

export default React.memo(Bar)
