import React, { useState } from 'react'

// components
import {
  BubbleSort,
  BigONotation,
  ContentContainer,
  Definition,
  Measurement,
  MergeSort,
  SideMenu,
  QuickSort
} from '../../components/Algorithms'

// utils
import { ITableOfContent } from '../../utils'

const tableOfContent: ITableOfContent[] = [
  { id: 'definition', title: 'Definition', component: Definition },
  {
    id: 'measurement',
    title: 'Measurement and Efficiency',
    component: Measurement
  },
  { id: 'big-o-notation', title: 'Big(O) notation', component: BigONotation },
  { id: 'bubble-sort', title: 'Bubble Sort', component: BubbleSort },
  { id: 'merge-sort', title: 'Merge Sort', component: MergeSort },
  { id: 'quick-sort', title: 'Quick Sort', component: QuickSort }
]

const Algorithms: React.FC = () => {
  const [selected, setSelected] = useState('algorithms')

  const handleTabSelection = (title: string) => setSelected(title)

  return (
    <div className='algorithmsPage'>
      <ContentContainer tableOfContent={tableOfContent} />
      <SideMenu
        onClick={handleTabSelection}
        selected={selected}
        tableOfContent={tableOfContent}
      />
    </div>
  )
}

export default Algorithms
