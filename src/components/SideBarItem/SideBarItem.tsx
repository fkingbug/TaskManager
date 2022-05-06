import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import { iconAnimation, item } from './SideBarItem.style'
import { selectIconItems } from '../MySelect/MySelect.routes'
import { TasksProp } from '../../features/TasksProp'
import { taskAPI } from '../../services/TaskServise'

const SideBarItem: FC<TasksProp> = ({
  id,
  icon = 'Profole',
  color = '00aaf7',
  name = 'Unknown task',
}) => {
  const complete = '90'
  const colorQWE = '#b274cb'

  const [deleteTask, {}] = taskAPI.useDeleteTasksMutation()

  const handleDelete = async () => {
    await deleteTask(id)
  }
  return (
    <ListItem onClick={() => handleDelete()} sx={{ cursor: 'pointer' }}>
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
