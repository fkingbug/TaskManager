import React, { FC } from 'react'
import { List } from '@mui/material'
import SideBarItem from '../SideBarItem/SideBarItem'
import { styleSideBar } from './SideBar.style'
import { TasksProp } from '../../features/TasksProp'
import { Link } from 'react-router-dom'
interface taskPropMain {
  tasks: TasksProp[]
}
const SideBar: FC<taskPropMain> = ({ tasks }) => {
  return (
    <List sx={styleSideBar}>
      {tasks.map((e: TasksProp) => (
        <Link key={`${e.id}_${e.name}`} to={`/task/${e.id}`} style={{ textDecoration: 'none' }}>
          <SideBarItem {...e} />
        </Link>
      ))}
    </List>
  )
}

export default SideBar
