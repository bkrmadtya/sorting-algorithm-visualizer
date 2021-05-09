import React from 'react'

interface IRowData {
	key: string
	value: string | number | Array<number>
}
interface ITableData {
	tableHead: string
	tableRows: IRowData[]
}

const tableData: ITableData = {
	tableHead: 'DETAILS',
	tableRows: [
		{
			key: 'Size',
			value: `25`
		},
		{
			key: 'Initial Array',
			value: `[88, 95, 117, 133, 48, 17, 123, 54, 37, 92, 74, 59, 124, 84, 113, 20, 94, 66, 73, 22, 39, 91, 97, 64, 13]`
		},
		{
			key: 'Current Array',
			value: `[13, 17, 20, 22, 37, 39, 48, 54, 59, 64, 66, 73, 74, 84, 88, 91, 92, 94, 95, 97, 113, 117, 123, 124, 133]`
		},
		{
			key: 'Active Elements',
			value: `10, 45`
		},
		{
			key: 'Status',
			value: `Unsorted`
		}
	]
}

const BottomPanel: React.FC = () => {
	return (
		<div className='bottomPanel'>
			<table className='detailTable'>
				<tbody>
					{tableData.tableRows.map(row => {
						return (
							<tr className='rowData' key={row.key}>
								<td className='rowData__key'>
									<strong>{row.key}</strong>
								</td>
								<td className='rowData__value'>{row.value}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default BottomPanel
