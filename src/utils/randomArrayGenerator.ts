import { Bar, BarStatus } from './'

const generateRandomSetOfNumbers = (sizeOfArray: number): Set<number> => {
  const set = new Set<number>()

  while (set.size < sizeOfArray) {
    const randomNumber = Math.floor(Math.random() * (sizeOfArray * 5)) + 10
    set.add(randomNumber)
  }

  return set
}

const randomArrayGenerator = (sizeOfArray: number): Array<Bar> => {
  const randomArray = Array.from(generateRandomSetOfNumbers(sizeOfArray))
  return randomArray.map(
    (height): Bar => ({ value: height, status: BarStatus.UNSORTED })
  )
}

export default randomArrayGenerator
