import React from 'react'

// utils
import { Bar } from './'

export interface IAlgorithm {
  sort: (arr: Bar[]) => Bar[][]
}

export interface ISortingAlgorithm {
  new (): IAlgorithm
}

export interface IState {
  steps: Bar[][]
  currentStep: number
  timeouts: NodeJS.Timeout[]
  delay: number
}

export interface ITableOfContent {
  id: string
  title: string
  component: React.FC
}
