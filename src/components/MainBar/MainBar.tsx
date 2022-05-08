import React, { FC } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import {
  styleMainBar,
  backBtn,
  mainContainer,
  nameTask,
  backAndName,
  taskname,
} from './MainBar.style'
import { TasksProp, TodosPropCreate } from '../../features/TasksProp'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import AddTaskInput from '../AddTaskInput/AddTaskInput'
import { taskAPI } from '../../services/TaskServise'
import MainTodoItem from '../MainTodoItem/MainTodoItem'
interface taskPropMain {
  tasks: TasksProp[]
}

const MainBar: FC<any> = ({ tasks }) => {
  const { id } = useParams()
  const taskfind = tasks.find((task: TasksProp) => task.id === id)
  console.log(taskfind)
  const [createTodo] = taskAPI.useCreateTodoMutation()

  const handleTodoPut = (todos: TasksProp[]) => {
    createTodo({ ...taskfind, todos: todos })
  }
  const handleDeleteTodoItem = (idTodoItem: string) => {
    const newArray = taskfind.todos.filter((e: TodosPropCreate) => e.idTask !== idTodoItem)
    console.log(newArray)
    createTodo({ ...taskfind, todos: newArray })
  }
  const handleComplete = (idTodoItem: string) => {
    const newArray = taskfind.todos.map(
      (e: TodosPropCreate) => console.log(e.isComplete)
      // e.idTask === idTodoItem ? { ...e, isComplete: !isComplete } : e
    )

    createTodo({ ...taskfind, todos: newArray })
  }
  return (
    <Box sx={styleMainBar}>
      <Box sx={mainContainer}>
        <Box sx={nameTask}>
          <Box sx={backAndName}>
            <IconButton sx={backBtn}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography sx={taskname}>{taskfind.name}</Typography>
          </Box>
          <IconButton sx={backBtn}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Box>
        <AddTaskInput color={taskfind.color} handleTodoPut={handleTodoPut} todos={taskfind.todos} />
        {taskfind.todos &&
          taskfind.todos.map((e: TodosPropCreate) => (
            <MainTodoItem
              {...e}
              color={taskfind.color}
              handleDeleteTodoItem={handleDeleteTodoItem}
            />
          ))}
      </Box>
    </Box>
  )
}

export default MainBar
