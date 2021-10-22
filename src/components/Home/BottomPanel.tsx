import React from 'react'
import { useSelector } from 'react-redux'

import { getInfoForBottomPanel } from '../../store/slice/sorting'

interface IRowData {
  key: string
  value: string | number | Array<number>
}
interface ITableData {
  tableHead: string
  tableRows: IRowData[]
}

const tableData = (
  activeElement: string,
  arraySize: number,
  initialArray: string,
  currentArray: string,
  status: string
): ITableData => ({
  tableHead: 'DETAILS',
  tableRows: [
    {
      key: 'Size',
      value: arraySize
    },
    {
      key: 'Initial Array',
      value: `[${initialArray}]`
    },
    {
      key: 'Current Array',
      value: `[${currentArray}]`
    },
    {
      key: 'Active Elements',
      value: activeElement.length ? activeElement : 'N/A'
    },
    {
      key: 'Status',
      value: status
    }
  ]
})

const BottomPanel: React.FC = () => {
  const {
    activeElement,
    arraySize,
    initialArray,
    currentArray,
    status
  } = useSelector(getInfoForBottomPanel)
  return (
    <div className='bottomPanel'>
      <table className='detailTable'>
        <tbody>
          {tableData(
            activeElement,
            arraySize,
            initialArray,
            currentArray,
            status
          ).tableRows.map(row => {
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
