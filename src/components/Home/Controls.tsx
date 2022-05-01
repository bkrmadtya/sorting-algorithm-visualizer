import { FC } from 'react'

interface IProps {
  sort: () => void
  pause: () => void
  reset: () => void
  previousStep: () => void
  nextStep: () => void
}

const Controls: FC<IProps> = ({
  sort,
  pause,
  reset,
  previousStep,
  nextStep
}: IProps) => {
  return (
    <div className='controls'>
      <button onClick={sort}>Sort</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={previousStep}>Previous Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default Controls
