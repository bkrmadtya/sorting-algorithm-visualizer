import React, { useState } from 'react'

// components
import {
  Algorithm,
  BigONotation,
  ContentContainer,
  SortingAlgorithm,
  SideMenu,
  Visualization
} from '../../components/Algorithms'

// utils
import { ITableOfContent } from '../../utils'

const tableOfContent: ITableOfContent[] = [
  { id: 'algorithm', title: 'Algorithm', component: Algorithm },
  {
    id: 'sorting-algorithm',
    title: 'Sorting Algorithms',
    component: SortingAlgorithm
  },
  { id: 'big-o-notation', title: 'Big(O) notation', component: BigONotation },
  { id: 'visualization', title: 'Visualization', component: Visualization }
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
