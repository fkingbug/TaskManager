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
  todos = [],
}) => {
  const colorQWE = '#b274cb'
  const completeIsDone = todos.reduce(
    (previousValue, currentValue) =>
      currentValue.isComplete === true ? previousValue + 1 : previousValue,
    0
  )
  const complete = Math.floor((completeIsDone / todos.length) * 100)

  const [deleteTask] = taskAPI.useDeleteTasksMutation()

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault()
    deleteTask(id)
  }
  return (
    <ListItem sx={{ cursor: 'pointer' }}>
      <IconButton sx={iconAnimation}>
        <Avatar variant='rounded' sx={{ bgcolor: color, color: '#20212c' }}>
          {selectIconItems.filter((e) => e.label === icon)[0].value}
        </Avatar>
        <ListItemText
          sx={item}
          primary={name}
          secondaryTypographyProps={{ sx: { color: colorQWE } }}
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
