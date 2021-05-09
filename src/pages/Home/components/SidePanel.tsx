import React, { useState } from 'react'
import Highlight from 'react-highlight.js'

// components
import { Header, Dropdown } from '../../../shared'

const bubbleSortCode = `let bubbleSort = (inputArr) => {
	let len = inputArr.length;
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < len; i++) {
			if (inputArr[i] > inputArr[i + 1]) {
				let tmp = inputArr[i];
				inputArr[i] = inputArr[i + 1];
				inputArr[i + 1] = tmp;
				swapped = true;
			}
		}
	} while (swapped);
	return inputArr;
};`

const algorithmsOptions = [
	{
		key: 'Quick Sort',
		value: 'quickSort',
		code: bubbleSortCode
	},
	{
		key: 'Bubble Sort',
		value: 'bubbleSort',
		code: bubbleSortCode
	},
	{
		key: 'Merge Sort',
		value: 'mergeSort',
		code: bubbleSortCode
	}
]

const SidePanel: React.FC = () => {
	return (
		<div className='sidePanel'>
			<Header className='panelHeader'>
				<span>Algorithm: </span>
				<Dropdown options={algorithmsOptions} />
			</Header>
			<div className='codeContainer'>
				<Highlight language='javascript'>{algorithmsOptions[1].code}</Highlight>
			</div>
		</div>
	)
}

export default SidePanel
