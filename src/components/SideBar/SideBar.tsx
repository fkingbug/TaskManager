import React, { FC } from 'react'
import { List } from '@mui/material'
import SideBarItem from '../SideBarItem/SideBarItem'
import { styleSideBar } from './SideBar.style'
import { TasksProp } from '../../features/TasksProp'
import { taskAPI } from '../../services/TaskServise'

const SideBar: FC<any> = () => {
  const { data: tasks } = taskAPI.useGetAllTasksQuery('')
  return (
    <List sx={styleSideBar}>
      {tasks && tasks.map((e: any) => <SideBarItem key={`${e.id}_${e.name}`} {...e} />)}
    </List>
  )
}

export default SideBar
