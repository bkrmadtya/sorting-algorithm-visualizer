// utils
import { Bar } from './'

const getIndexOfElement = (arr: Bar[], ele: Bar): number =>
  arr.findIndex(item => item.value === ele.value)

const swapElements = (
  arr: Bar[],
  firstEle: Bar,
  secondEle: Bar
): Array<Bar> => {
  const indexOfFirstEle = getIndexOfElement(arr, firstEle)
  const indexOfSecondEle = getIndexOfElement(arr, secondEle)

  const tempFirst: Bar = { value: firstEle.value, status: firstEle.status }
  const tempSecond: Bar = { value: secondEle.value, status: secondEle.status }

  arr[indexOfFirstEle] = tempSecond
  arr[indexOfSecondEle] = tempFirst

  return [...arr]
}

export default swapElements
