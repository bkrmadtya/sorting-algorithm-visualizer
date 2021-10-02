import { createSlice } from '@reduxjs/toolkit'

// js
import { RootState } from '../';
import { Bar, BarStatus, ISortingAlgorithm, randomArrayGenerator } from '../../utils';
import { BubbleSort, MergeSort, QuickSort } from '../../algorithms'

const Algorithm = {
  [BubbleSort.name]: BubbleSort,
  [MergeSort.name]: MergeSort,
  [QuickSort.name]: QuickSort
}


interface AlgorithmState {
  selectedAlgorithm: string
  allAlgorithms: string[]
  animationSpeed: number
  arraySize: number
  currentStep: number
  initialArray: Bar[]
  steps: Bar[][]
}

const initialRandomArray = [...randomArrayGenerator(25)]
const initialAlgorithm = new BubbleSort()
const initialSteps = initialAlgorithm.sort(initialRandomArray)

const initialState: AlgorithmState = {
  animationSpeed: 50,
  arraySize: 25,
  currentStep: 0,
  initialArray: initialRandomArray,
  selectedAlgorithm: BubbleSort.name,
  steps: initialSteps,
  allAlgorithms: [...Object.keys(Algorithm)]
}

export const sorting = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeArraySize: (state, { payload }) => {
      const randomArray = [...randomArrayGenerator(payload)]
      state.arraySize = payload
      state.currentStep = 0
      state.initialArray = randomArray
      state.steps = sortArray(Algorithm[state.selectedAlgorithm], randomArray)
    },
    changeAnimationSpped: (state, { payload }) => {
      state.animationSpeed = parseInt(payload)
    },
    changeAlgorithm: (state, { payload }) => {
      const selectedAlgorithm = (Algorithm[payload] || Algorithm.BubbleSort)
      state.currentStep = 0
      state.selectedAlgorithm = selectedAlgorithm.name
      state.steps = sortArray(selectedAlgorithm, state.initialArray)
    },
    goToNextStep: (state) => {
      if (state.currentStep < state.steps.length - 1) {
        state.currentStep += 1
      }
    },
    goToPreviousStep: (state) => {
      if (state.currentStep >= 0) {
        state.currentStep -= 1
      }
    },
    resetSorting: (state) => {
      const randomArray = [...randomArrayGenerator(state.arraySize)]
      state.initialArray = randomArray
      state.currentStep = 0
      state.steps = sortArray(Algorithm[state.selectedAlgorithm], randomArray)
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  changeArraySize,
  changeAlgorithm,
  changeAnimationSpped,
  goToNextStep,
  goToPreviousStep,
  resetSorting
} = sorting.actions

export default sorting.reducer

const sortArray = (algorithm: ISortingAlgorithm, randomArray: Bar[]): Bar[][] => {
  return new (algorithm || Algorithm.BubbleSort)().sort(randomArray)
}


export const getActiveElements = ({ sorting }: RootState): string => sorting.steps[sorting.currentStep]
  .filter(ele => ele.status === BarStatus.ACTIVE)
  .map(ele => ele.value).join(", ")
export const getArraySize = ({ sorting }: RootState): number => sorting.arraySize
export const getCurrentArray = ({ sorting }: RootState): string => sorting.steps[sorting.currentStep].map(i => i.value).join(", ")
export const getInitialArray = ({ sorting }: RootState): string => sorting.initialArray.map(i => i.value).join(", ")
export const getSortingStatus = ({ sorting }: RootState): string => {
  if (sorting.currentStep === 0) {
    return BarStatus.UNSORTED
  } else if (sorting.steps[sorting.currentStep].every(ele => ele.status === BarStatus.SORTED)) {
    return BarStatus.SORTED
  } else {
    return 'SORTING'
  }
}

type BottomPanelInfo = {
  activeElement: string
  arraySize: number
  initialArray: string
  currentArray: string
  status: string
}

export const getInfoForBottomPanel = (state: RootState): BottomPanelInfo => {
  return {
    arraySize: getArraySize(state),
    activeElement: getActiveElements(state),
    initialArray: getInitialArray(state),
    currentArray: getCurrentArray(state),
    status: getSortingStatus(state)
  }
}