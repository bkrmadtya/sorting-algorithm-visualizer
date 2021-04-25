import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'src/components/Common'

const Algorithms: React.FC = () => {
	return (
		<div className='algorithmsPage'>
			<div className='algorithmsPage__sidePanel'>
				<Header className='panelHeader'>Table of content</Header>
				<a href='#definition'>
					<div className='contentLink'>Definition</div>
				</a>
				<a href='#measurement'>
					<div className='contentLink'>Measurement and Efficiency</div>
				</a>
				<a href='#big-o-notation'>
					<div className='contentLink'>Big O notation</div>
				</a>
				<a href='#bubble-sort'>
					<div className='contentLink'>Bubble Sort</div>
				</a>
				<a href='#merge-sort'>
					<div className='contentLink'>Merge Sort</div>
				</a>
				<a href='#quick-sort'>
					<div className='contentLink'>Quick Sort</div>
				</a>
			</div>
			<div className='algorithmsPage__mainPanel'>
				<Header>Algorithms</Header>
				<article></article>
			</div>
		</div>
	)
}

export default Algorithms
