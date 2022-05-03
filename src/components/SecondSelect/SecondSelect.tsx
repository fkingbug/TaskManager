import * as React from 'react'
import { useSelect, SelectOption } from '@mui/base'
import { styled } from '@mui/system'
import { selectIconItems } from './SecondSelect.routes'

const Root = styled('div')`
  font-size: 0.875rem;
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  color: #000;
`

const Toggle = styled('div')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 120px;
  background: inherit;
  border: 2px solid #2e2e39;;
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #adadb4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  & .placeholder {
    opacity: 0.8;
  }
  `
)

const Listbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0 0 0;
  list-style: none;
  position: absolute;
  height: auto;
  transition: opacity 0.1s ease;
  width: 100%;
  background-color: #20212c;
  border: 2px solid #2e2e39;;
  border-radius: 0.75em;
  color: #adadb4;
  overflow: auto;
  z-index: 1;
  outline: 0px;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end;
  }

  & > li {
    padding: 8px;
    border-radius: 0.45em;

    &:hover {
      background: #2a2b37;
    }

    &[aria-selected='true'] {
      background: #2a2b37;
    }
  }
  `
)

interface Props {
  options: any
  placeholder?: string
}

function CustomSelect({ options, placeholder }: Props) {
  const listboxRef = React.useRef<HTMLUListElement>(null)
  const [listboxVisible, setListboxVisible] = React.useState(false)

  const { getButtonProps, getListboxProps, getOptionProps, value } = useSelect({
    listboxRef,
    options,
  })

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus()
    }
  }, [listboxVisible])

  const obj = selectIconItems
  return (
    <Root
      onMouseOver={() => setListboxVisible(true)}
      onMouseOut={() => setListboxVisible(false)}
      onFocus={() => setListboxVisible(true)}
      onBlur={() => setListboxVisible(false)}
    >
      <Toggle {...getButtonProps()}>
        {/* {value && <span className='placeholder'>{placeholder ?? ' '}</span>} */}
      </Toggle>
      <Listbox {...getListboxProps()} className={listboxVisible ? '' : 'hidden'}>
        {options.map((option: any) => (
          <li key={option.name} {...getOptionProps(option)}>
            {option.icon}
          </li>
        ))}
      </Listbox>
    </Root>
  )
}

const options = [
  {
    label: 'Red',
    value: '#D32F2F',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
]

export default function SecondSelect() {
  return <CustomSelect placeholder='Select a color...' options={selectIconItems} />
}
