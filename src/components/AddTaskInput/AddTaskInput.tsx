import React, { FC, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { IconButton, InputAdornment, InputBase } from '@mui/material'
import { btnInput, styleInput } from './AddTaskInput.style'
import { TodosPropCreate } from '../../features/TasksProp'

interface InputProp {
  color: string
  handleTodoPut: (todosPut: TodosPropCreate[]) => void
  todos: TodosPropCreate[]
}

const AddTaskInput: FC<InputProp> = ({ color, handleTodoPut, todos }) => {
  const [value, setValue] = useState('')
  const handleAdd = () => {
    if (value) {
      const obj = {
        idTask: `${new Date()}`,
        todo: value,
        isComplete: false,
      }
      handleTodoPut([...todos, obj])
    }
    setValue('')
  }

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleAdd()
    }
  }
  return (
    <InputBase
      sx={styleInput}
      placeholder='Add tasks'
      type='text'
      value={value}
      fullWidth
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={keyDownHandler}
      startAdornment={
        <InputAdornment position='start'>
          <IconButton onClick={handleAdd} sx={{ ...btnInput, background: color }}>
            <AddIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default AddTaskInput
