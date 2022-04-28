import { Avatar, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import SideBarItem from '../SideBarItem/SideBarItem'

const sideBarItems = [
  { color: '#B3CB74', colorQWE: '#b274cb', name: 'task two', complete: 10 },
  { color: '#b274cb', colorQWE: '#b274cb', name: 'task two', complete: 20 },
  { color: '#854018', colorQWE: '#b274cb', name: 'task two', complete: 60 },
  { color: '#ABCDEF', colorQWE: '#b274cb', name: 'task two', complete: 70 },
  { color: '#b274cb', colorQWE: '#b274cb', name: 'task two', complete: 80 },
  { color: '#b274cb', colorQWE: '#b274cb', name: 'task two', complete: 90 },
  { color: '#b274cb', colorQWE: '#b274cb', name: 'task two', complete: 100 },
]
const SideBar = () => {
  const style = {
    background: '#20212c',
    minWidth: '250px',
    height: '100%',
  }

  return (
    <List sx={style}>
      {sideBarItems.map((e) => (
        <SideBarItem {...e} />
      ))}
    </List>
  )
}

export default SideBar
