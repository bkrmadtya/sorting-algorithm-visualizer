import Bar from 'src/utils/Bar'
import { IAlgorithm } from 'src/utils/interface'
import changeStatusOfElement from 'src/utils/changeStatusOfElement'
import swapElements from 'src/utils/swapElements'
import { BarStatus } from 'src/utils/enum'

const { ACTIVE, LESSER, GREATER, SORTED, UNSORTED } = BarStatus

export default class BubbleSort implements IAlgorithm {
	private steps: Bar[][] = []

	public sort(arr: Bar[]): Bar[][] {
		this.steps.push([...arr], [...arr])

		let length = arr.length

		while (length) {
			const result = [...this.steps[this.steps.length - 1]]
			let first = { ...result[0] }

			for (let j = 1; j < length; j++) {
				const second = result[j]

				changeStatusOfElement(this.steps, first, ACTIVE)
				changeStatusOfElement(this.steps, second, ACTIVE)

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
