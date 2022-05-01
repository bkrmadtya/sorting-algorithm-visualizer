import { FC, ReactEventHandler, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  changeAlgorithm,
  changeAnimationSpeed,
  changeArraySize,
  changeColorMode
} from '@/store/slice/sorting'
import { RootState } from '@/store'

import { Header, Dropdown } from '@/components/shared'

const SizeOption = 'Size'
const AlgorithmOption = 'Algorithm'
const ModeOption = 'Color mode'

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
  },
  {
    name: ModeOption,
    value: [
      {
        key: 'True',
        value: true.toString()
      },
      {
        key: 'False',
        value: false.toString()
      }
    ]
  }
]

const OptionContainer: FC = () => {
  const { allAlgorithms } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch()

  const handleChangeEvent: ReactEventHandler<HTMLSelectElement> = useCallback(
    event => {
      const { name, value } = event.currentTarget
      if (name === SizeOption) {
        dispatch(changeArraySize(value))
      } else if (name === AlgorithmOption) {
        dispatch(changeAlgorithm(value))
      } else if (name === ModeOption) {
        // console.log(value)
        dispatch(changeColorMode(value))
      } else {
        dispatch(changeAnimationSpeed(value))
      }
    },
    [dispatch]
  )

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
              value={op.value[1].value}
            />
          </Header>
        ))}
      </div>
    )
  }, [handleChangeEvent, options])
}

export default OptionContainer
