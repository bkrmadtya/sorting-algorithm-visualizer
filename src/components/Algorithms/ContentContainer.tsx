import { FC } from 'react'

import Section from './Section'

import { ITableOfContent } from '@/utils'

interface IProps {
  tableOfContent: ITableOfContent[]
}

const ContentContainer: FC<IProps> = ({ tableOfContent }) => {
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
