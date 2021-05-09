import React from 'react'

// components
import { Header } from '../../../shared'
import Section from './Section'

// utils
import { ITableOfContent } from '../../../utils/interface'

interface IProps {
	tableOfContent: ITableOfContent[]
}

const ContentContainer: React.FC<IProps> = ({ tableOfContent }) => {
	console.log(tableOfContent)
	return (
		<div className='contentContainer'>
			<div id='algorithms'>
				<Header className='panelHeader'>Algorithms</Header>
			</div>
			<article>
				{tableOfContent.map(content => {
					return <Section key={content.id} content={content} />
				})}
			</article>
		</div>
	)
}

export default ContentContainer
