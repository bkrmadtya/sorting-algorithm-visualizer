import React from 'react'
import { Header } from '../../../Common'
import { ITableOfContent } from '../../../../utils/interface'
import Section from './Section'

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
