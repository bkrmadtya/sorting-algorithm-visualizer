import React, { ReactEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import { Header, Dropdown } from '../shared'

// js
import { changeAnimationSpped, changeArraySize } from '../../store/slice/sorting'
import { RootState } from 'src/store'

const sizeOptions = {
  name: 'SizeOption',
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
}

const speedOptions = {
  name: 'SpeedOption',
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

const OptionContainer: React.FC = () => {
  const { arraySize, animationSpeed } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch();

  const handleChangeEvent: ReactEventHandler<HTMLSelectElement> = event => {
    const { name, value } = event.currentTarget
    if (name === sizeOptions.name) {
      dispatch(changeArraySize(value))
    } else {
      dispatch(changeAnimationSpped(value))
    }
  }

  return (
    <div className='optionContainer'>
      <Header className='panelHeader'>
        <span>Size: </span>
        <Dropdown
          name={sizeOptions.name}
          options={sizeOptions.value}
          onChange={handleChangeEvent}
          value={`${arraySize}`}
        />
      </Header>
      <Header className='panelHeader'>
        <span>Speed: </span>
        <Dropdown
          name={speedOptions.name}
          onChange={handleChangeEvent}
          options={speedOptions.value}
          value={`${animationSpeed}`}
        />
      </Header>
    </div>
  )
}

export default OptionContainer
