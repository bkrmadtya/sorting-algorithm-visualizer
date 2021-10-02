import React, { ReactEventHandler, useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import { Header, Dropdown } from '../shared'

// js
import { changeAlgorithm, changeAnimationSpped, changeArraySize } from '../../store/slice/sorting'
import { RootState } from '../../store'

const SizeOption = 'Size'
const AlgorithmOption = 'Algorithm'

const getMenuOptions = (allAlgorithms: string[]) => [
  {
    name: AlgorithmOption,
    value: allAlgorithms.map(al => ({ key: al, value: al }))
  },
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
        key: '35',
        value: '35'
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
  const { arraySize, allAlgorithms } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch();

  const handleChangeEvent: ReactEventHandler<HTMLSelectElement> = useCallback(event => {
    const { name, value } = event.currentTarget
    if (name === SizeOption) {
      dispatch(changeArraySize(value))
    } else if (name === AlgorithmOption) {
      dispatch(changeAlgorithm(value))
    } else {
      dispatch(changeAnimationSpped(value))
    }
  }, [dispatch])
  const rerender = useRef(0)

  const options = useMemo(() => {
    return getMenuOptions(allAlgorithms)
  }, [allAlgorithms])

  return useMemo(() => {
    return (
      <div className='optionContainer'>
        {options.map(op => (
          <Header className='panelHeader' key={op.name}>
            <span>{op.name}: </span>
            <Dropdown
              name={op.name}
              options={op.value}
              onChange={handleChangeEvent}
              value={`${arraySize}`}
            />
          </Header>))
        }
        {rerender.current++}
      </div>
    )
  }, [arraySize, handleChangeEvent, options])
}

export default OptionContainer
