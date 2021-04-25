import React from 'react'

// components
import { Header } from 'src/components/Common'

// utils
import { ITableOfContent } from 'src/utils/interface'

interface IProps {
	section: ITableOfContent
}

const Section: React.FC<IProps> = ({ section, children }) => {
	return (
		<section id={section.id} className='content'>
			<Header className='content__header'>{section.title}</Header>
			<div className='content__detail'>{children}</div>
		</section>
	)
}

export default Section
