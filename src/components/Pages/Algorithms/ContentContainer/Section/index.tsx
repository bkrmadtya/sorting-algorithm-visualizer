import React from 'react'

// components
import { Header } from '../../../../Common'

// utils
import { ITableOfContent } from '../../../../../utils/interface'

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
