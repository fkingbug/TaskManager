import React, { useState } from 'react'
import { Select, SelectChangeEvent, MenuItem } from '@mui/material'
const testStyle = {
  '&.MuiNativeSelect-root': {
    borderRadius: 4,
    border: '2px solid #2e2e39',
    color: '#adadb4',
  },
}
const style = {
  '&.MuiSelect-root': {
    backgroundColor: 'white',
    '& option': {
      backgroundColor: 'white',
      padding: '10px 4px',
      //backgroundColor: "rgba(0, 0, 0, 0.08) !important", This had strange DOM effects
      '&::before': {
        content: '"\\2610"',
        width: '1.4em',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: 24,
      },
    },
    '& option:checked': {
      '&::before': {
        content: '"\\2611"',
        fontSize: 24,
      },
    },
  },
}
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: '#20212c',
      border: '2px solid #2e2e39',
      padding: '5px 10px',
      color: 'white',
    },
  },
}
const MySelect = () => {
  const [valueSelect, setValueSelect] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setValueSelect(event.target.value as string)
  }
  return (
    <>
      <Select
        sx={testStyle}
        value={valueSelect}
        onChange={handleChange}
        variant='standard'
        MenuProps={MenuProps}
      >
        <MenuItem value={'10'}>Ten</MenuItem>
        <MenuItem value={'20'}>Twenty</MenuItem>
        <MenuItem value={'30'}>qwe</MenuItem>
        <MenuItem value='40'>ert</MenuItem>
        <MenuItem value='50'>dsf</MenuItem>
        <MenuItem value='60'>xvc</MenuItem>
      </Select>
    </>
  )
}

export default MySelect
