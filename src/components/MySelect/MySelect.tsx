import React, { useState } from 'react'
import { MenuProps, testStyle } from './MySelect.style'
import { arraySelectIcon } from './MySelect.routes'
import { Select, SelectChangeEvent, MenuItem } from '@mui/material'

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
        {arraySelectIcon &&
          arraySelectIcon.map((itemSelect) => (
            <MenuItem key={`${itemSelect.value}_${itemSelect.name}`} value={itemSelect.value}>
              {itemSelect.name}
            </MenuItem>
          ))}
      </Select>
    </>
  )
}

export default MySelect
