import React from 'react'

interface IProps {
  sort: () => void
  cancel: () => void
  reset: () => void
  previousStep: () => void
  nextStep: () => void
}

const Controls: React.FC<IProps> = ({
  sort,
  cancel,
  reset,
  previousStep,
  nextStep
}: IProps) => {
  return (
    <div className='controls'>
      <button onClick={sort}>Sort</button>
      <button onClick={cancel}>Cancel</button>
      <button onClick={reset}>Reset</button>
      <button onClick={previousStep}>Previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default Controls
