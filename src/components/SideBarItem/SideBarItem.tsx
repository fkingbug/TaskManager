import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { iconAnimation, item } from './SideBarItem.style'
import { SideBarItemProp } from '../../features/SideBarItemProp'
import { selectIconItems } from '../MySelect/MySelect.routes'
import { TasksProp } from '../../features/TasksProp'

const SideBarItem: FC<TasksProp> = ({
  id,
  icon = 'Profole',
  color = '00aaf7',
  name = 'Unknown task',
}) => {
  const complete = '90'
  const colorQWE = '#b274cb'

  return (
    <ListItem sx={{ cursor: 'pointer' }}>
      <IconButton sx={iconAnimation}>
        <Avatar variant='rounded' sx={{ bgcolor: color }}>
          {selectIconItems.filter((e) => e.label === icon)[0].value}
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
