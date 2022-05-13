import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import { iconAnimation, item } from './SideBarItem.style'
import { selectIconItems } from '../MySelect/MySelect.routes'
import { TasksProp } from '../../features/TasksProp'

const SideBarItem: FC<TasksProp> = ({
  id,
  icon = 'Profole',
  color = '00aaf7',
  name = 'Unknown task',
  todos = [],
}) => {
  const colorQWE = '#b274cb'
  const completeIsDone = todos.reduce(
    (previousValue, currentValue) => (currentValue.isComplete ? previousValue + 1 : previousValue),
    0
  )
  const complete = completeIsDone ? Math.floor((completeIsDone / todos.length) * 100) : 100
  const iconMain = selectIconItems.find((e) => e.label === icon)?.value

  return (
    <ListItem sx={{ cursor: 'pointer' }}>
      <IconButton sx={iconAnimation}>
        <Avatar variant='rounded' sx={{ bgcolor: color, color: '#20212c' }}>
          {iconMain}
        </Avatar>
        <ListItemText
          sx={item}
          primary={name}
          secondaryTypographyProps={{ sx: { color: colorQWE } }}
          secondary={`Complete ${complete}%`}
        />
      </IconButton>
    </ListItem>
  )
}

export default SideBarItem
