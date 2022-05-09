import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import { CollectionsItemProp } from '../Collections/Collections'
import { TodosItemProp } from '../MainTodoItem/MainTodoItem'

const CollectionsItem: FC<CollectionsItemProp> = ({ idTask, isComplete, name, color, todos }) => {
  return <Grid item sx={{ background: 'white', height: '100px' }} xs={4}></Grid>
}

export default CollectionsItem
