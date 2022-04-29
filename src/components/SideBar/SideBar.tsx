import React from 'react'
import { List } from '@mui/material'
import SideBarItem from '../SideBarItem/SideBarItem'
import { sideBarItems } from './SideBar.routes'
import { styleSideBar } from './SideBar.style'

const SideBar = () => {
  return (
    <List sx={styleSideBar}>
      {sideBarItems.map((e) => (
        <SideBarItem {...e} />
      ))}
    </List>
  )
}

export default SideBar
