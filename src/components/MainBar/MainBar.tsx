import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { styleMainBar } from './MainBar.style'
import { taskAPI } from '../../services/TaskServise'
import { TasksProp } from '../../features/TasksProp'

interface taskPropMain {
  tasks: TasksProp[]
}

const MainBar: FC<any> = ({ tasks }) => {
  const { id } = useParams()
  const taskfind = tasks.find((task: TasksProp) => task.id === id)

  console.log(taskfind)
  return (
    <Box sx={styleMainBar}>
      {taskfind && (
        <>
          <Typography>{taskfind.id}</Typography>
          <Typography>{taskfind.color}</Typography>
          <Typography>{taskfind.name}</Typography>
          <Typography>{taskfind.icon}</Typography>
        </>
      )}
    </Box>
  )
}

export default MainBar
