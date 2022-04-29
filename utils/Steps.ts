// utils
import { Bar } from './'

export default class Steps {
  private steps: Bar[][]
  private arrayLength: number

  constructor(initialArray: Bar[]) {
    // 1st as initial which should not change
    // and 2nd as last element which will be changed first
    this.steps = [[...initialArray], [...initialArray]]
    this.arrayLength = initialArray.length
  }

  public addStep(newSteps?: Bar[]): Bar[] {
    const newStepsToAdd = this.makeDeepCopy([
      ...(newSteps || this.getLastStep())
    ])
    this.steps.push(newStepsToAdd)
    return this.getLastStep()
  }

  public getLastStep(): Bar[] {
    return this.makeDeepCopy(this.steps[this.steps.length - 1])
  }

  public getNoOfSteps(): number {
    return this.steps.length
  }

  public getSteps(): Bar[][] {
    return this.steps
  }

  public getArrayLength(): number {
    return this.arrayLength
  }

  /**
   * Make deep copy of the steps
   * so, that each element of step is a distinct object and not referencing value from other steps
   * @param arg
   * @returns arg
   */
  private makeDeepCopy<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg))
  }
}
