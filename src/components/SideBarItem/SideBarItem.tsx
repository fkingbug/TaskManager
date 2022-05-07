import React, { FC } from 'react'
import { Avatar, IconButton, ListItem, ListItemText } from '@mui/material'
import { iconAnimation, item } from './SideBarItem.style'
import { selectIconItems } from '../MySelect/MySelect.routes'
import { TasksProp } from '../../features/TasksProp'
import { taskAPI } from '../../services/TaskServise'
import ClearIcon from '@mui/icons-material/Clear'

const SideBarItem: FC<TasksProp> = ({
  id,
  icon = 'Profole',
  color = '00aaf7',
  name = 'Unknown task',
}) => {
  const complete = '90'
  const colorQWE = '#b274cb'

  const [deleteTask] = taskAPI.useDeleteTasksMutation()

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault()
    deleteTask(id)
  }
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
        <IconButton onClick={(event) => handleDelete(event)}>
          <ClearIcon sx={{ color: '#808080' }} />
        </IconButton>
      </IconButton>
    </ListItem>
  )
}

export default SideBarItem
