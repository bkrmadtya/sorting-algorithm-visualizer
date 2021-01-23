import Bar from 'src/utils/Bar'
import { BarStatus } from 'src/utils/enum'

const changeStatusOfElement = (
	steps: Array<Array<Bar>>,
	ele: Bar,
	status: BarStatus
): void => {
	const indexOfEle = steps[steps.length - 1].findIndex(
		i => i.value === ele.value
	)
	steps[steps.length - 1][indexOfEle] = { ...ele, status }
}

export default changeStatusOfElement
