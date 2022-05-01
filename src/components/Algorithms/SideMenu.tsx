import React from 'react'

import { ITableOfContent } from '../../utils'

import { Header } from '../shared'

interface IProps {
  tableOfContent: ITableOfContent[]
  selected: string
  onClick: (name: string) => void
}

const AlgorithmsTabs: React.FC<IProps> = ({
  onClick,
  selected,
  tableOfContent
}) => {
  return (
    <div className='sideMenu'>
      <a href='#algorithm'>
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
