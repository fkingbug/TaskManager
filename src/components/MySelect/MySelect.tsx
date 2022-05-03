import React, { useState } from 'react'
// import { MenuProps, testStyle } from './MySelect.style'
import { arraySelectIcon } from './MySelect.routes'
import { Select, SelectChangeEvent, MenuItem } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

const MySelect = () => {
  const [valueSelect, setValueSelect] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setValueSelect(event.target.value as string)
  }

  const minimalSelectClasses = {
    select: {
      minWidth: 200,
      background: 'white',
      color: deepPurple[500],
      fontWeight: 200,
      borderStyle: 'none',
      borderWidth: 2,
      borderRadius: 12,
      paddingLeft: 24,
      paddingTop: 14,
      paddingBottom: 15,
      boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
      '&:focus': {
        borderRadius: 12,
        background: 'white',
        borderColor: deepPurple[100],
      },
      '& ul': {
        paddingTop: '0',
        paddingBottom: '0',
        background: 'white',
        '& li': {
          fontWeight: '200',
          paddingTop: '12',
          paddingBottom: '12',
        },
        '& li:hover': {
          background: deepPurple[100],
        },
        '& li.MuiSelected': {
          color: 'white',
          background: deepPurple[400],
        },
        '& li.MuiSelected:hover': {
          background: deepPurple[500],
        },
      },
    },
    icon: {
      color: deepPurple[300],
      right: 12,
      position: 'absolute',
      userSelect: 'none',
      pointerEvents: 'none',
    },
    paper: {
      borderRadius: 12,
      marginTop: 8,
    },
    list: {
      paddingTop: '0',
      paddingBottom: '0',
      background: 'white',
      '& li': {
        fontWeight: '200',
        paddingTop: '12',
        paddingBottom: '12',
      },
      '& li:hover': {
        background: deepPurple[100],
      },
      '& li.MuiSelected': {
        color: 'white',
        background: deepPurple[400],
      },
      '& li.MuiSelected:hover': {
        background: deepPurple[500],
      },
    },
  }

  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
  }

  return (
    <>
      <Select
        // classes={minimalSelectClasses.select}
        value={valueSelect}
        onChange={handleChange}
        variant='standard'
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
