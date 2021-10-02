import React, { ReactEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import { Header, Dropdown } from '../shared'

// js
import { changeAnimationSpped, changeArraySize } from '../../store/slice/sorting'
import { RootState } from 'src/store'

const SizeOption = 'Size'

const options = [
  {
    name: SizeOption,
    value: [
      {
        key: '10',
        value: '10'
      },
      {
        key: '25',
        value: '25'
      },
      {
        key: '50',
        value: '50'
      }
    ]
  },
  {
    name: 'Speed',
    value: [
      {
        key: '1x',
        value: '100'
      },
      {
        key: '2x',
        value: '50'
      },
      {
        key: '4x',
        value: '20'
      }
    ]
  }

]


const OptionContainer: React.FC = () => {
  const { arraySize } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch();

  const handleChangeEvent: ReactEventHandler<HTMLSelectElement> = event => {
    const { name, value } = event.currentTarget
    if (name === SizeOption) {
      dispatch(changeArraySize(value))
    } else {
      dispatch(changeAnimationSpped(value))
    }
  }

  return (
    <div className='optionContainer'>
      {options.map(op => (
        <Header className='panelHeader' key={op.name}>
          <span>Size: </span>
          <Dropdown
            name={op.name}
            options={op.value}
            onChange={handleChangeEvent}
            value={`${arraySize}`}
          />
        </Header>))
      }
    </div>
  )
}

export default OptionContainer
