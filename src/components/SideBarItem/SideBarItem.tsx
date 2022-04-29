import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { iconAnimation, item } from './SideBarItem.style'
import { SideBarItemProp } from '../../features/SideBarItemProp'

const SideBarItem: FC<SideBarItemProp> = ({ color, name, complete, colorQWE }) => {
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
