import React from 'react'

// utils
import { BarStatus } from 'src/utils'

const Legend: React.FC<{ type: BarStatus }> = ({ type }) => {
  return (
    <div className='legend'>
      <div
        className='legend__color'
        style={{
          backgroundColor: `var(--${type})`
        }}
      ></div>
      <div className='legend__text'>
        <strong>{type}</strong>
      </div>
    </div>
  )
}

export default Legend