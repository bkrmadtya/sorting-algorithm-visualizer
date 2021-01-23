import { BarStatus } from 'src/utils/enum'

export default class Bar {
	value: number
	status: BarStatus

	constructor(value: number, status: BarStatus) {
		this.value = value
		this.status = status
	}
}
