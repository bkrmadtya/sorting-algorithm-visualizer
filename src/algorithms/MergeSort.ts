import Bar from 'src/utils/Bar'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import { BarStatus } from 'src/utils/enum'
import { IAlgorithm } from 'src/utils/interface'
const { ACTIVE, UNSORTED, SORTED } = BarStatus

export default class MergeSort implements IAlgorithm {
  private steps: Bar[][] = []

  public sort(arr: Bar[]): Bar[][] {
    this.steps = []
    this.steps.push([...arr], [...arr])
    this.mergeSort(arr)
    return this.steps
  }

  private mergeSort(arr: Bar[]): Bar[] {
    if (arr.length < 2) {
      return arr
    }

    const pivot: number = Math.floor(arr.length / 2)

    let leftArr = arr.slice(0, pivot)
    let rightArr = arr.slice(pivot, arr.length)

    leftArr = this.mergeSort(leftArr)
    rightArr = this.mergeSort(rightArr)

    const mergedArray = this.merge(leftArr, rightArr)

    return mergedArray
  }

  private merge(leftArr: Bar[], rightArr: Bar[]): Bar[] {
    const sortedArr: Bar[] = []
    const leastIndex = this.getLeastIndex(this.steps, leftArr[0], rightArr[0])

    while (leftArr.length && rightArr.length) {
      const isLeftEleGreater = leftArr[0].value > rightArr[0].value
      const currentIndex = sortedArr.length

      changeStatusOfElement(this.steps, leftArr[0], ACTIVE)
      changeStatusOfElement(this.steps, rightArr[0], ACTIVE)

      const lesserEle = isLeftEleGreater
        ? this.removeFirstElementAndReturn(rightArr)
        : this.removeFirstElementAndReturn(leftArr)

      const greaterEle = isLeftEleGreater ? leftArr[0] : rightArr[0]

      sortedArr.push(lesserEle)

      // move lesser element to the least position
      const modifiedStep = this.changeElementPosition(
        this.steps,
        lesserEle,
        leastIndex,
        currentIndex
      )

      this.steps.push(modifiedStep)

      if (
        leftArr.length + rightArr.length + sortedArr.length ===
        this.steps[0].length
      ) {
        changeStatusOfElement(this.steps, lesserEle, SORTED)
      } else {
        changeStatusOfElement(this.steps, lesserEle, UNSORTED)
        changeStatusOfElement(this.steps, greaterEle, UNSORTED)
      }
    }

    while (leftArr.length) {
      sortedArr.push(this.removeFirstElementAndReturn(leftArr))

      if (
        leftArr.length + rightArr.length + sortedArr.length ===
        this.steps[0].length
      ) {
        changeStatusOfElement(
          this.steps,
          sortedArr[sortedArr.length - 1],
          SORTED
        )
      }
    }

    while (rightArr.length) {
      sortedArr.push(this.removeFirstElementAndReturn(rightArr))

      if (
        leftArr.length + rightArr.length + sortedArr.length ===
        this.steps[0].length
      ) {
        changeStatusOfElement(
          this.steps,
          sortedArr[sortedArr.length - 1],
          SORTED
        )
      }
    }

    return sortedArr
  }

  // Copy of Array.shift(): T | undefined but it return T
  private removeFirstElementAndReturn(arr: Bar[]): Bar {
    const firstEle = new Bar(arr[0].value, arr[0].status)
    arr = [...arr.splice(0, 1)]
    return firstEle
  }

  // get least index among two element from the last step of Bar[]
  private getLeastIndex(steps: Bar[][], eleA: Bar, eleB: Bar): number {
    const indexOfA = steps[steps.length - 1].findIndex(
      ele => ele.value === eleA.value
    )
    const indexOfB = steps[steps.length - 1].findIndex(
      ele => ele.value === eleB.value
    )

    return Math.min(indexOfA, indexOfB)
  }

  // change position of the element/bar inside an Bar[]
  private changeElementPosition = (
    steps: Bar[][],
    eleToMove: Bar,
    currentIndex: number,
    leastIndex: number
  ): Bar[] => {
    const modifiedStep = [...steps[steps.length - 1]]
    const indexOfLesserEle = modifiedStep.findIndex(
      ele => ele.value === eleToMove.value
    )

    modifiedStep.splice(
      leastIndex + currentIndex,
      0,
      modifiedStep.splice(indexOfLesserEle, 1)[0]
    )

    return modifiedStep
  }
}
