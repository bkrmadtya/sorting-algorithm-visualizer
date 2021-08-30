import React from 'react'
import { BarStatus } from 'src/utils/enum'
import BarColors from 'src/utils/BarColors'

interface IProps {
  value: number
  status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
  const barStyle = {
    height: value,
    width: 5,
    margin: 2.5,
    backgroundColor: BarColors[status]
  }
  return <div style={barStyle}></div>
}

export default Bar
