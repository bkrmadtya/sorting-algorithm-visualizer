import { BarStatus } from 'src/utils/enum'

const BarColors = {
	[BarStatus.ACTIVE]: 'orange',
	[BarStatus.LESSER]: 'red',
	[BarStatus.GREATER]: '#a4fba6',
	[BarStatus.SORTED]: '	#0f9200',
	[BarStatus.UNSORTED]: 'black',
	[BarStatus.PIVOT]: 'yellow',
	[BarStatus.UNSWAPPED]: '#ffc87c'
}

export default BarColors
