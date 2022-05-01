import React from 'react'

import { Bar } from './'

export interface IAlgorithm {
  sort: (arr: Bar[]) => Bar[][]
}

export interface ISortingAlgorithm {
  new(colorMode: boolean): IAlgorithm
}

export interface ITableOfContent {
  id: string
  title: string
  component: React.FC
}
