/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// utils
import { Bar } from '../utils/Bar'
import { RootState } from '../store'
import {
  goToNextStep,
  goToPreviousStep,
  resetSorting
} from '../store/slice/sorting'

type IState = NodeJS.Timeout[]

const useSort = (): {
  currentStep: number
  steps: Bar[][]
  sort: () => void
  reset: () => void
  pause: () => void
  previousStep: () => void
  nextStep: () => void
} => {
  const [timeouts, setTimeouts] = useState<IState>([])
  const { animationSpeed, currentStep, steps, arraySize } = useSelector(
    (state: RootState) => state.sorting
  )
  const dispatch = useDispatch()

  const pause = (): void => {
    timeouts.forEach(t => clearTimeout(t))
    setTimeouts([])
  }

  useEffect(() => {
    pause()
    return pause
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, arraySize])

  useEffect(() => {
    if (currentStep > 0) {
      sort()
    }
    return pause
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationSpeed])

  const sort = (): void => {
    let i = 0
    const timeouts = []
    pause()

    if (currentStep >= steps.length - 1) {
      return
    }
    while (i < steps.length - 1 - currentStep) {
      const timeout = setTimeout(() => {
        dispatch(goToNextStep())
      }, animationSpeed * i)

      timeouts.push(timeout)
      i++
    }
    setTimeouts([...timeouts])
  }

  const reset = (): void => {
    pause()
    dispatch(resetSorting())
  }

  const previousStep = (): void => {
    pause()
    dispatch(goToPreviousStep())
  }

  const nextStep = (): void => {
    pause()
    dispatch(goToNextStep())
  }

  return { currentStep, steps, sort, pause, reset, previousStep, nextStep }
}

export default useSort
