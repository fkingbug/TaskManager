import { Avatar, Box, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { TasksProp } from '../../features/TasksProp'
import { selectIconItems } from '../MySelect/MySelect.routes'
import { styleDone, styleItem, styleName } from './CollectionsItem.style'

const CollectionsItem: FC<TasksProp> = ({ id, name, icon, color, todos }) => {
  const completeIsDone = todos.reduce(
    (previousValue, currentValue) => (currentValue.isComplete ? previousValue + 1 : previousValue),
    0
  )
  const iconMain = selectIconItems.find((e) => e.label === icon)?.value

  return (
    <Grid item md={4}>
      <Link key={`${id}_${name}`} to={`/task/${id}`} style={{ textDecoration: 'none' }}>
        <Box style={styleItem}>
          <Avatar variant='rounded' sx={{ bgcolor: color, color: '#20212c', mb: '15px' }}>
            {iconMain}
          </Avatar>
          <Typography sx={styleName}>{name}</Typography>
          <Typography sx={styleDone}>
            {completeIsDone} / {todos.length} done
          </Typography>
        </Box>
      </Link>
    </Grid>
  )
}

export default CollectionsItem
