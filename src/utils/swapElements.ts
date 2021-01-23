import Bar from 'src/utils/Bar'

const getIndexOfElement = (arr: Bar[], ele: Bar): number =>
	arr.findIndex(item => item.value === ele.value)

const swapElements = (
	arr: Bar[],
	firstEle: Bar,
	secondEle: Bar
): Array<Bar> => {
	const indexOfFirstEle = getIndexOfElement(arr, firstEle)
	const indexOfSecondEle = getIndexOfElement(arr, secondEle)

	const tempFrist: Bar = new Bar(firstEle.value, firstEle.status)
	const tempSecond: Bar = new Bar(secondEle.value, secondEle.status)

	arr[indexOfFirstEle] = tempSecond
	arr[indexOfSecondEle] = tempFrist

	return arr
}

export default swapElements
