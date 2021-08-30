import Bar from 'src/utils/Bar'

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
