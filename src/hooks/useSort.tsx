/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// utils
import { Bar } from 'src/utils/Bar'
import { RootState } from 'src/store'
import { resetSorting } from 'src/store/slice/sorting'

interface IState {
  steps: Bar[][]
  currentStep: number
  timeouts: NodeJS.Timeout[]
}

const useSort = (): {
  state: IState
  sort: () => void
  reset: () => void
  cancel: () => void
  previousStep: () => void
  nextStep: () => void
} => {
  const { animationSpeed, steps } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch();

  const [state, setState] = useState<IState>({
    steps: steps,
    currentStep: 0,
    timeouts: []
  })

  useEffect(() => {
    setState(prevState => ({ ...prevState, steps, currentStep: 0 }))
  }, [steps, setState])

  const cancel = (): void => {
    state.timeouts.forEach(t => clearTimeout(t))
    setState({ ...state, timeouts: [] })
  }

  const sort = (): void => {
    let i = 0
    const timeouts = []

    cancel()

    if (state.currentStep >= state.steps.length - 1) {
      return
    }

    while (i < state.steps.length - 1 - state.currentStep) {
      const timeout = setTimeout(() => {
        setState(prevState => {
          const currentStep = prevState.currentStep

          return {
            ...prevState,
            currentStep: currentStep + 1
          }
        })
      }, animationSpeed * i)

      timeouts.push(timeout)
      i++
    }

    setState({ ...state, timeouts: timeouts })
  }

  const reset = (): void => {
    cancel()
    dispatch(resetSorting());
  }

  // const isSorted = (arr: Bar[]) => {
  //   const copyArr = [...arr].sort((a, b) => a.value - b.value)
  //   return copyArr.every((i, idx) => arr[idx].value === i.value)
  // }

  const previousStep = (): void => {
    cancel()

    if (state.currentStep <= 0) {
      return
    }

    setState(prevState => {
      const currentStep = prevState.currentStep
      return {
        ...prevState,
        currentStep: currentStep - 1
      }
    })
  }

  const nextStep = (): void => {
    cancel()

    if (state.currentStep >= state.steps.length - 1) {
      return
    }

    setState(prevState => {
      const currentStep = prevState.currentStep

      return {
        ...prevState,
        currentStep: currentStep + 1
      }
    })
  }

  return { state, sort, cancel, reset, previousStep, nextStep }
}

export default useSort
