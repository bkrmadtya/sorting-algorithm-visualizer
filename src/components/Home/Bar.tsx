import { FC, memo } from 'react'

import { BarStatus } from '@/utils'

interface IProps {
  value: number
  status: BarStatus
  isMobileScreen: boolean
}

const Bar: FC<IProps> = ({ value, status, isMobileScreen }: IProps) => {
  const barStyle = {
    height: value * (isMobileScreen ? 1.5 : 2),
    backgroundColor: `var(--${status})`
  }
  return <div className='bar' style={barStyle} />
}

export default memo(Bar)
