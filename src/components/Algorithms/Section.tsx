import React from 'react'

import { ITableOfContent } from '@/utils'

import { Header } from '@/components/shared'
interface IProps {
  content: ITableOfContent
}

const Section: React.FC<IProps> = ({ content }) => {
  const { component: Component, id, title } = content
  return (
    <section id={id} className='content'>
      <Header className='content__header'>{title}</Header>
      <div className='content__detail'>{<Component />}</div>
    </section>
  )
}

export default Section
