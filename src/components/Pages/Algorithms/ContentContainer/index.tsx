import React from 'react'
import { Header } from 'src/components/Common'
import { ITableOfContent } from 'src/utils/interface'
import Section from './Section/Section'

interface IProps {
	tableOfContent: ITableOfContent[]
}

const ContentContainer: React.FC<IProps> = ({ tableOfContent }) => {
	console.log(tableOfContent)
	return (
		<div className='algorithmsPage__mainPanel'>
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
