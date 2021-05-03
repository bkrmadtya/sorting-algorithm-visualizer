import Bar from './Bar'
import { BarStatus } from './enum'

const changeStatusOfElement = (
	steps: Array<Array<Bar>>,
	ele: Bar,
	status: BarStatus
): void => {
	const indexOfEle = steps[steps.length - 1].findIndex(
		i => i.value === ele.value
	)
	steps[steps.length - 1][indexOfEle] = new Bar(ele.value, status)
}

export default changeStatusOfElement
