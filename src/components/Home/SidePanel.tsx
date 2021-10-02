import React, { useState } from 'react'

// components
import Highlight from 'react-highlight.js'
import { Header, Dropdown } from '../shared'

const bubbleSortCode = `
let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};`

const algorithmsOptions = [
  {
    key: 'Bubble Sort',
    value: 'bubbleSort',
    inventor: 'John Von Neumann',
    year: '1996',
    timeComplexity: {
      best: <var>O(n&sup2;)</var>,
      worst: <var>O(n&sup2;)</var>
    },
    spaceComplexity: {
      best: <var>O(n&sup2;)</var>,
      worst: <var>O(1)</var>
    },
    code: bubbleSortCode
  },
  {
    key: 'Merge Sort',
    value: 'mergeSort',
    inventor: 'John Von Neumann',
    year: '1996',
    timeComplexity: {
      best: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      ),
      worst: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      )
    },
    spaceComplexity: {
      best: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      ),
      worst: <var>O(n)</var>
    },
    code: bubbleSortCode
  },
  {
    key: 'Quick Sort',
    value: 'quickSort',
    inventor: 'John Von Neumann',
    year: '1996',
    timeComplexity: {
      best: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      ),
      worst: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      )
    },
    spaceComplexity: {
      best: (
        <var>
          O(n log<sub>n</sub>)
        </var>
      ),
      worst: <var>O(n&sup2;)</var>
    },
    code: bubbleSortCode
  }
]

const SidePanel: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(
    algorithmsOptions[0]
  )

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const selected =
      algorithmsOptions.find(
        option => option.value === event.currentTarget.value
      ) || algorithmsOptions[0]
    setSelectedAlgorithm(selected)
  }
  return (
    <div className='sidePanel'>
      <div className='algorithmDetail'>
        <Dropdown onChange={handleSelect} options={algorithmsOptions} />
        <table className='algorithmDetail__history'>
          <thead>
            <tr>
              <th colSpan={2}>HISTORY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Inventor</td>
              <td>{selectedAlgorithm.inventor}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{selectedAlgorithm.year}</td>
            </tr>
          </tbody>
        </table>

        <table className='algorithmDetail__complexity'>
          <thead>
            <tr>
              <th colSpan={2}>TIME COMPLEXITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best case</td>
              <td>{selectedAlgorithm.timeComplexity.worst}</td>
            </tr>
            <tr>
              <td>Worst case</td>
              <td>{selectedAlgorithm.timeComplexity.best}</td>
            </tr>
          </tbody>
        </table>

        <table className='algorithmDetail__complexity'>
          <thead>
            <tr>
              <th colSpan={2}>SPACE COMPLEXITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best case</td>
              <td>{selectedAlgorithm.spaceComplexity.worst}</td>
            </tr>
            <tr>
              <td>Worst case</td>
              <td>{selectedAlgorithm.spaceComplexity.best}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='codeContainer'>
        <Header className='codeContainer__title'>CODE</Header>
        <Highlight language='javascript'>
          <>{selectedAlgorithm.code}</>
        </Highlight>
      </div>
    </div>
  )
}

export default SidePanel