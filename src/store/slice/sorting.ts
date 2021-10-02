import { createSlice } from '@reduxjs/toolkit'

// js
import { Bar, randomArrayGenerator } from '../../utils';
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
      state.arraySize = payload
      state.initialArray = [...randomArrayGenerator(payload)]
    },
    changeAlgorithm: (state, { payload }) => {
      const selectedAlgorithm = (Algorithm[payload] || Algorithm.BubbleSort)
      state.selectedAlgorithm = selectedAlgorithm.name
      state.steps = new selectedAlgorithm().sort(state.initialArray)
    },
    resetSorting: (state) => {
      const randomArray = [...randomArrayGenerator(state.arraySize)]
      state.initialArray = randomArray
      const algorithm = new (Algorithm[state.selectedAlgorithm] || Algorithm.BubbleSort)
      const newSteps = algorithm.sort(randomArray)
      state.steps = newSteps
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeArraySize, changeAlgorithm, resetSorting } = sorting.actions

export default sorting.reducer