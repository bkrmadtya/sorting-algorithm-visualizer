import React from 'react'

// components
import { Header } from 'src/components/Common'

// utils
import { ITableOfContent } from 'src/utils/interface'

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
