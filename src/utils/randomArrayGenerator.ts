import Bar from 'src/utils/Bar'
import { BarStatus } from 'src/utils/enum'

const generateRandomSetOfNumbers = (sizeOfArray: number): Set<number> => {
	const set = new Set<number>()

	while (set.size < sizeOfArray) {
		const randomNumber = Math.floor(Math.random() * (sizeOfArray * 20)) + 10
		set.add(randomNumber)
	}

	return set
}

const randomArrayGenerator = (sizeOfArray?: number | 15): Array<Bar> => {
	const randomArray = Array.from(generateRandomSetOfNumbers(sizeOfArray))
	return randomArray.map(height => new Bar(height, BarStatus.UNSORTED))
}

export default randomArrayGenerator
