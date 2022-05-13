import { Box, IconButton, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddTaskInput from '../AddTaskInput/AddTaskInput'
import { styleMainBar, backBtn, mainContainer, nameTask, backAndName, taskname } from '../MainBar'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { TasksProp, TodosPropCreate } from '../../features/TasksProp'
import { taskAPI } from '../../services/TaskServise'
import MainTodoItem from '../MainTodoItem/MainTodoItem'

export interface findProp {
  taskfind: TasksProp
  id?: string
}
const MainContent: FC<findProp> = ({ taskfind, id }) => {
  const [createTodo] = taskAPI.useCreateTodoMutation()

  const handleTodoPut = (todosPut: TodosPropCreate[]): void => {
    createTodo({ ...taskfind, todos: todosPut })
  }
  const handleDeleteTodoItem = (idTodoItem: string): void => {
    const newArray = taskfind.todos.filter((e: TodosPropCreate) => e.idTask !== idTodoItem)
    createTodo({ ...taskfind, todos: newArray })
  }
  const handleComplete = (idTodoItem: string): void => {
    const newArray = taskfind.todos.map((e: TodosPropCreate) =>
      e.idTask === idTodoItem ? { ...e, isComplete: !e.isComplete } : e
    )
    createTodo({ ...taskfind, todos: newArray })
  }

  const history = useNavigate()
  const [deleteTask] = taskAPI.useDeleteTasksMutation()
  const handleDeletemain = () => {
    deleteTask(id)
    history('/')
  }

  return (
    <Box sx={styleMainBar}>
      <Box sx={mainContainer}>
        <Box sx={nameTask}>
          <Box sx={backAndName}>
            <Link style={{ textDecoration: 'none' }} to='/'>
              <IconButton sx={backBtn}>
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
            <Typography sx={taskname}>{taskfind?.name}</Typography>
          </Box>
          <IconButton onClick={handleDeletemain} sx={backBtn}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
        <AddTaskInput color={taskfind.color} handleTodoPut={handleTodoPut} todos={taskfind.todos} />
        {taskfind.todos &&
          taskfind.todos.map((e: TodosPropCreate) => (
            <MainTodoItem
              key={e.idTask}
              {...e}
              color={taskfind.color}
              handleDeleteTodoItem={handleDeleteTodoItem}
              handleComplete={handleComplete}
            />
          ))}
      </Box>
    </Box>
  )
}

export default MainContent
