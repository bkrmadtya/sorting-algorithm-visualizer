// utils
import { Bar, BarStatus } from './'

const changeStatusOfElement = (
  steps: Array<Array<Bar>>,
  ele: Bar,
  status: BarStatus
): void => {
  const indexOfEle = steps[steps.length - 1].findIndex(
    i => i.value === ele.value
  )
  steps[steps.length - 1][indexOfEle] = { value: ele.value, status }
}

export default changeStatusOfElement
