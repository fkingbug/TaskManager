import * as React from 'react'
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
  SelectOption,
} from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { Box, styled } from '@mui/system'
import { selectIconItems } from '../SecondSelect/SecondSelect.routes'
import { Typography } from '@mui/material'

const StyledButton = styled('button')(
  ({ theme }) => `
  display : flex ;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: 55px;
  min-width:140px;
  background: inherit;
  border: 2px solid #2e2e39;
  border-radius: 0.75em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #adadb4;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    background: inherit;
    border: 2px solid #2e2e39;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
)

// &.${selectUnstyledClasses.focusVisible} {
//   outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
// }

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 150px;
  background-color: #20212c;
  border: 2px solid #2e2e39;;
  border-radius: 0.75em;
  color: #adadb4;
  overflow: auto;
  outline: 0px;
  `
)
const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: pointer;
  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #31314a;
    color: #adadb4;
    
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #31314a;
    color: #adadb4;
    
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #31314a;
    color: #adadb4;
    
  }

  &.${optionUnstyledClasses.disabled} {
    color: #adadb4;
    
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #31314a;
    color: #adadb4;
    
  }
  `
)

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`

function CustomSelect(props: SelectUnstyledProps<number>) {
  const components: SelectUnstyledProps<number>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    //@ts-ignore
    Popper: StyledPopper,
    ...props.components,
  }

  return <SelectUnstyled {...props} components={components} />
}

function renderValue(option: SelectOption<any> | null) {
  if (option == null) {
    return <span>Search</span>
  }

  return <span>{option.label}</span>
}

export default function ThirdSelectCustom() {
  const colorOption = '#b3cb74'
  return (
    <CustomSelect renderValue={renderValue}>
      {selectIconItems.map((items) => (
        <StyledOption key={`${new Date()}_${items.label}`} value={items.label}>
          <Box style={{ display: 'flex', height: 'fit-content' }}>
            <Box
              sx={{
                marginRight: '10px',
                height: 'fit-content',
                lineHeight: 0,
                color: colorOption,
              }}
            >
              {items.value}
            </Box>
            <Typography sx={{ height: 'fit-content' }}>{items.label}</Typography>
          </Box>
        </StyledOption>
      ))}
    </CustomSelect>
  )
}
