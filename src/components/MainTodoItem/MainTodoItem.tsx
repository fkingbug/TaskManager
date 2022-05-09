import React, { FC, useState } from 'react'
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
export interface TodosItemProp {
  idTask: string
  isComplete: boolean
  todo: string
  color: string
  handleDeleteTodoItem: any
  handleComplete: any
}

const itemStyle = {
  width: '100%',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#20212c',
  borderRadius: '10px',
  marginBottom: '15px',
}
const styleLabel = {
  flex: 1,
  padding: 0,
}

const MainTodoItem: FC<TodosItemProp> = ({
  idTask,
  isComplete,
  todo,
  color,
  handleDeleteTodoItem,
  handleComplete,
}) => {
  const [check, setCheck] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked)
  }
  const handleDeleteTodo = () => handleDeleteTodoItem(idTask)
  const handleCompleteTodo = () => handleComplete(idTask)
  return (
    <Box sx={itemStyle}>
      <FormControlLabel
        // sx={styleLabel}
        sx={{ ...styleLabel, textDecoration: check === true ? 'line-through' : 'none' }}
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
