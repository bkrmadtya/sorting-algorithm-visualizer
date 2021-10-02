import { createSlice } from '@reduxjs/toolkit'

// js
import { Bar, ISortingAlgorithm, randomArrayGenerator } from '../../utils';
import { BubbleSort, MergeSort, QuickSort } from '../../algorithms'

interface AlgorithmState {
  selectedAlgorithm: string
  animationSpeed: number
  arraySize: number
  initialArray: Bar[]
  steps: Bar[][]
}

const Algorithm = {
  [BubbleSort.name]: BubbleSort,
  [MergeSort.name]: MergeSort,
  [QuickSort.name]: QuickSort
}

const initialRandomArray = [...randomArrayGenerator(25)]
const initialAlgorithm = new BubbleSort()
const initialSteps = initialAlgorithm.sort(initialRandomArray)

const initialState: AlgorithmState = {
  selectedAlgorithm: BubbleSort.name,
  animationSpeed: 50,
  arraySize: 25,
  initialArray: initialRandomArray,
  steps: initialSteps
}

export const sorting = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeArraySize: (state, { payload }) => {
      const randomArray = [...randomArrayGenerator(payload)]
      state.arraySize = payload
      state.initialArray = randomArray
      state.steps = sortArray(Algorithm[state.selectedAlgorithm], randomArray)
    },
    changeAnimationSpped: (state, { payload }) => {
      state.animationSpeed = parseInt(payload)
    },
    changeAlgorithm: (state, { payload }) => {
      const selectedAlgorithm = (Algorithm[payload] || Algorithm.BubbleSort)
      state.selectedAlgorithm = selectedAlgorithm.name
      state.steps = sortArray(selectedAlgorithm, state.initialArray)
    },
    resetSorting: (state) => {
      const randomArray = [...randomArrayGenerator(state.arraySize)]
      state.initialArray = randomArray
      state.steps = sortArray(Algorithm[state.selectedAlgorithm], randomArray)
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeArraySize, changeAlgorithm, changeAnimationSpped, resetSorting } = sorting.actions

export default sorting.reducer

const sortArray = (algorithm: ISortingAlgorithm, randomArray: Bar[]): Bar[][] => {
  return new (algorithm || Algorithm.BubbleSort)().sort(randomArray)
}