// utils
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
  // const randomArray = [52, 30, 32, 14, 57, 43, 10, 25, 38, 35]
  // const randomArray = [111, 117, 35, 79, 64, 127, 77, 130, 103, 73, 13, 122, 131, 59, 37, 97, 84, 46, 21, 125, 17, 119, 94, 19, 58] // first 3 and last
  // const randomArray = [57, 28, 126, 42, 125, 16, 62, 89, 27, 11, 44, 58, 130, 94, 32, 15, 34, 60, 133, 52, 101, 38, 55, 29, 129] // all good
  // const randomArray = [64, 88, 49, 95, 31, 120, 19, 20, 72, 134, 39, 34, 105, 106, 35, 89, 102, 75, 46, 128, 48, 60, 61, 52, 96] // 11th index
  // const randomArray = [123, 76, 91, 150, 138, 96, 29, 20, 154, 128, 35, 47, 149, 147, 89, 63, 139, 113, 160, 141, 159, 84, 157, 165, 66, 49, 32, 68, 82, 171, 41, 156, 60, 169, 42] // two in the middle
  return randomArray.map(
    (height): Bar => ({ value: height, status: BarStatus.UNSORTED })
  )
}

export default randomArrayGenerator
