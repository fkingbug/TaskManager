import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { contentStyle } from './MainBar.style'
import { TasksProp } from '../../features/TasksProp'
import SideBar from '../SideBar/SideBar'
import MainContent from '../MainContent/MainContent'

interface qweqwe {
  tasks: TasksProp[]
}

const MainBar: FC<qweqwe> = ({ tasks }) => {
  const { id } = useParams()
  const taskfind = tasks.find((task: TasksProp) => task.id === id)

  return (
    <Box sx={contentStyle}>
      <SideBar tasks={tasks} />
      {taskfind ? <MainContent taskfind={taskfind} id={id} /> : <p>загрузка</p>}
    </Box>
  )
}

export default MainBar
