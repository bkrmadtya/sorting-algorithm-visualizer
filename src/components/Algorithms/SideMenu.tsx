import React from 'react'

// components
import { Header } from '../shared'

// utils
import { ITableOfContent } from '../../utils'

interface IProps {
  tableOfContent: ITableOfContent[]
  selected: string
  onClick: (name: string) => any
}

const AlgorithmsTabs: React.FC<IProps> = ({
  onClick,
  selected,
  tableOfContent
}) => {
  return (
    <div className='sideMenu'>
      <a href='#algorithms'>
        <Header className='panelHeader'>Table of content</Header>
      </a>
      {tableOfContent.map(({ id, title }) => (
        <a href={`#${id}`} key={title}>
          <div
            className={`contentLink ${title === selected ? 'selectedTab' : ''}`}
            onClick={() => onClick(title)}
          >
            {title}
          </div>
        </a>
      ))}
    </div>
  )
}

export default AlgorithmsTabs