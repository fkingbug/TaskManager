import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
interface SideBarItemInterface {
  color: string
  name: string
  complete: number
  colorQWE: string
}

const SideBarItem: FC<SideBarItemInterface> = ({ color, name, complete, colorQWE }) => {
  const item = {
    paddingLeft: '15px',
    color: '#dbcfcf',
    boxSizing: 'border-box',
    // 'MuiListItem-secondaryAction': {
    //   color: 'red',
    // },
  }
  // const color = {
  //   color: '`95, 193, 11 ,&{complete}`',
  // }
  const iconAnimation = {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    borderRadius: 0,
  }
  return (
    <ListItem sx={{ cursor: 'pointer' }}>
      <IconButton sx={iconAnimation}>
        <Avatar variant='rounded' sx={{ bgcolor: color }}>
          <AccessTimeIcon />
        </Avatar>
        <ListItemText
          sx={item}
          primary={name}
          secondaryTypographyProps={{ sx: { color: colorQWE, opacity: `0.${complete}` } }}
          secondary={`Complete ${complete}%`}
        />
      </IconButton>
    </ListItem>
  )
}

export default SideBarItem
