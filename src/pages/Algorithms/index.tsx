import { useState, FC } from 'react'

import { ITableOfContent } from '@/utils'

import {
  Algorithm,
  ContentContainer,
  SortingAlgorithm,
  SideMenu,
  Visualization
} from '@/components/Algorithms'

const tableOfContent: ITableOfContent[] = [
  { id: 'algorithm', title: 'Algorithm', component: Algorithm },
  {
    id: 'sorting-algorithm',
    title: 'Sorting Algorithms',
    component: SortingAlgorithm
  },
  { id: 'visualization', title: 'Visualization', component: Visualization }
]

const Algorithms: FC = () => {
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
