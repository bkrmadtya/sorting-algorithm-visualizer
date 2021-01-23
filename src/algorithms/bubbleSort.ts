import Bar from 'src/utils/Bar'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import { BarStatus } from 'src/utils/enum'
import swapElements from 'src/utils/swapElements'

const { ACTIVE, LESSER, GREATER, SORTED, UNSORTED } = BarStatus

const bubbleSort = (arr: Bar[]): Bar[][] => {
	const steps: Bar[][] = []
	steps.push([...arr], [...arr])

	const sort = () => {
		let length = arr.length

		while (length) {
			const result = [...steps[steps.length - 1]]
			let first = { ...result[0] }

			for (let j = 1; j < length; j++) {
				const second = result[j]

				changeStatusOfElement(steps, first, ACTIVE)
				changeStatusOfElement(steps, second, ACTIVE)

				if (first.value > second.value) {
					swapElements(result, first, second)
				} else {
					first = result[j]
				}

				steps.push([...result])
				changeStatusOfElement(steps, first, UNSORTED)
				changeStatusOfElement(steps, second, UNSORTED)
			}

			changeStatusOfElement(steps, first, SORTED)
			length--
		}
	}

	sort()

	return steps
}

export default bubbleSort
