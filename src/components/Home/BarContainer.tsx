import { FC, useEffect, useState } from 'react'

import { Bar } from '@/utils'

import BarComponent from './Bar'
interface IProps {
  step: Bar[]
}

const BarContainer: FC<IProps> = ({ step }: IProps) => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true)

  useEffect(() => {
    const resizeCallback = () => {
      const isMobile = window.innerWidth < 768
      setIsMobileScreen(isMobile)
    }

    resizeCallback()
    window.addEventListener('resize', resizeCallback)
    return () => {
      window.removeEventListener('resize', resizeCallback)
    }
  }, [])

  return (
    <div className='barContainer'>
      {step.map(a => (
        <BarComponent
          key={a.value}
          value={a.value}
          status={a.status}
          isMobileScreen={isMobileScreen}
        />
      ))}
    </div>
  )
}

export default BarContainer
