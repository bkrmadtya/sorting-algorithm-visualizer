import { createSlice } from '@reduxjs/toolkit'

// js
import { ISortingAlgorithm } from '../../utils';
import { BubbleSort } from '../../algorithms'

interface AlgorithmState {
  selectedAlgorithm: ISortingAlgorithm
  animationSpeed: number
  arraySize: number
}

const initialState: AlgorithmState = {
  selectedAlgorithm: BubbleSort,
  animationSpeed: 50,
  arraySize: 25

}

export const algorithm = createSlice({
  name: 'algorithm',
  initialState,
  reducers: {
    changeArraySize: (state, { payload }) => {
      state.arraySize = payload
    },
    changeAlgorithm: (state, { payload }) => {
      state.selectedAlgorithm = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeArraySize, changeAlgorithm } = algorithm.actions

export default algorithm.reducer