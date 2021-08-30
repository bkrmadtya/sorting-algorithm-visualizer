import { BarStatus } from 'src/utils/enum'

const BarColors = {
  [BarStatus.ACTIVE]: 'orange',
  [BarStatus.LESSER]: 'red',
  [BarStatus.GREATER]: 'green',
  [BarStatus.SORTED]: 'green',
  [BarStatus.UNSORTED]: 'grey',
  [BarStatus.PIVOT]: 'yellow'
}

export default BarColors
