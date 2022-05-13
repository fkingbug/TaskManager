import React, { FC, useState } from 'react'
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { itemStyle, styleLabel } from './MainTodoItem.style'
import { TodosItemProp } from '../../features/MainTodoItemProp'

const MainTodoItem: FC<TodosItemProp> = ({
  idTask,
  isComplete,
  todo,
  color,
  handleDeleteTodoItem,
  handleComplete,
}) => {
  const [check, setCheck] = useState(isComplete)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked)
  }
  const handleDeleteTodo = () => handleDeleteTodoItem(idTask)
  const handleCompleteTodo = () => handleComplete(idTask)

  return (
    <Box sx={itemStyle}>
      <FormControlLabel
        sx={{ ...styleLabel, textDecoration: check ? 'line-through' : 'none' }}
        onClick={handleCompleteTodo}
        control={
          <Checkbox
            sx={{
              color: color,
              '&.Mui-checked': {
                color: color,
              },
            }}
            checked={check}
            onChange={handleChange}
          />
        }
        label={todo}
      />
      <IconButton onClick={handleDeleteTodo}>
        <DeleteOutlineIcon sx={{ color: color }} />
      </IconButton>
    </Box>
  )
}

export default MainTodoItem
