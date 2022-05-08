import { FormControl, IconButton, Input, InputAdornment, InputBase } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import React, { FC, useState } from 'react'

interface InputProp {
  color: string
  handleTodoPut: any
  todos: any
}

const style = {
  borderRadius: 4,
  border: '2px solid #2e2e39',
  color: '#adadb4',
  padding: '10px 12px',
  marginBottom: '20px',
}

const btn = {
  borderRadius: '10px',
  color: '#17181f',
}

const AddTaskInput: FC<InputProp> = ({ color, handleTodoPut, todos }) => {
  const [value, setValue] = useState('')
  const handleAdd = () => {
    if (value !== '') {
      const obj = {
        todo: value,
        isComplete: false,
      }
      handleTodoPut([...todos, obj])
    }
    setValue('')
  }
  return (
    <InputBase
      sx={style}
      placeholder='Add tasks'
      type='text'
      value={value}
      fullWidth
      onChange={(e) => setValue(e.target.value)}
      startAdornment={
        <InputAdornment position='start'>
          <IconButton
            onKeyPress={(e) => e.key === 'Enter' && handleAdd}
            onClick={handleAdd}
            sx={{ ...btn, background: color }}
          >
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default AddTaskInput
