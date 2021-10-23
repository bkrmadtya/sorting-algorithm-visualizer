import React from 'react'

// components
import Section from './Section'

// utils
import { ITableOfContent } from '../../utils'

interface IProps {
  tableOfContent: ITableOfContent[]
}

const ContentContainer: React.FC<IProps> = ({ tableOfContent }) => {
  return (
    <div className='contentContainer'>
      <article>
        {tableOfContent.map(content => {
          return <Section key={content.id} content={content} />
        })}
      </article>
    </div>
  )
}

export default ContentContainer
