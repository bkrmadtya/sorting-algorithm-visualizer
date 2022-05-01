import { FC, ReactEventHandler, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction'

import {
  changeAlgorithm,
  changeAnimationSpeed,
  changeArraySize,
  changeColorMode
} from '@/store/slice/sorting'
import { RootState } from '@/store'

import { Dropdown } from '@/components/shared'

const SizeOption = 'Size'
const AlgorithmOption = 'Algorithm'
const ModeOption = 'Color Mode'
const SpeedOption = 'Speed'

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
    name: SpeedOption,
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
        key: 'On',
        value: true.toString()
      },
      {
        key: 'Off',
        value: false.toString()
      }
    ]
  }
]

const OptionHandlerMap: {
  [key: string]: ActionCreatorWithPayload<any, string>
} = {
  [SizeOption]: changeArraySize,
  [AlgorithmOption]: changeAlgorithm,
  [ModeOption]: changeColorMode,
  [SpeedOption]: changeAnimationSpeed
}

const OptionContainer: FC = () => {
  const { allAlgorithms } = useSelector((state: RootState) => state.sorting)
  const dispatch = useDispatch()

  const handleChangeEvent: ReactEventHandler<HTMLSelectElement> = useCallback(
    event => {
      const { name, value } = event.currentTarget
      dispatch(OptionHandlerMap[name](value))
    },
    [dispatch]
  )

  const options = useMemo(() => {
    return getMenuOptions(allAlgorithms)
  }, [allAlgorithms])

  return useMemo(() => {
    return (
      <div className='optionContainer'>
        {options.map(({ name, value }) => (
          <Dropdown
            name={name}
            options={value}
            onChange={handleChangeEvent}
            value={value[1].value}
          />
        ))}
      </div>
    )
  }, [handleChangeEvent, options])
}

export default OptionContainer
