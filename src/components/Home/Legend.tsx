import { FC } from 'react'

import { BarStatus } from '@/utils'

const Legend: FC<{ type: BarStatus }> = ({ type }) => {
  return (
    <div className='legend'>
      <div
        className='legend__color'
        style={{ backgroundColor: `var(--${type})` }}
      />
      <strong>{type}</strong>
    </div>
  )
}

export default Legend
