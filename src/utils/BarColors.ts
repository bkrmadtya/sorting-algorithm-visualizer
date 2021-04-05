import { BarStatus } from 'src/utils/enum'

const BarColors = {
	[BarStatus.ACTIVE]: '#ff9e2c', 	// orange
	[BarStatus.LESSER]: '#ff6b6b', 	// red
	[BarStatus.GREATER]: '#4ecd9d', // green
	[BarStatus.SORTED]: '#4e97cd', 	// purple
	[BarStatus.UNSORTED]: 'black',
	[BarStatus.PIVOT]: '#eeee78' 	// yellow
}

export default BarColors
