import {
  IAlgorithm,
  changeStatusOfElement,
  swapElements,
  Bar,
  BarStatus
} from '@/utils'

const { ACTIVE, SORTED, UNSORTED } = BarStatus

export default class BubbleSort implements IAlgorithm {
  private steps: Bar[][] = []
  private colorMode: boolean

  constructor(colorMode: boolean) {
    this.colorMode = colorMode
  }

  public sort(arr: Bar[]): Bar[][] {
    this.steps = [[...arr], [...arr]]

    let length = arr.length

    while (length) {
      const result = [...this.steps[this.steps.length - 1]]
      let first = { ...result[0] }

      for (let j = 1; j < length; j++) {
        const second = result[j]

        if (this.colorMode) {
          changeStatusOfElement(this.steps, first, ACTIVE)
          changeStatusOfElement(this.steps, second, ACTIVE)
        }

        if (first.value > second.value) {
          swapElements(result, first, second)
        } else {
          first = result[j]
        }

        this.steps.push([...result])
        changeStatusOfElement(this.steps, first, UNSORTED)
        changeStatusOfElement(this.steps, second, UNSORTED)
      }

      changeStatusOfElement(this.steps, first, SORTED)
      length--
    }

    return this.steps
  }
}
