import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import CollectionsItem from '../CollectionsItem/CollectionsItem'
import { styleCollections, styleCollectionsName } from './Collections.style'
import { ArrayTaskProp, TasksProp } from '../../features/TasksProp'

const Collections: FC<ArrayTaskProp> = ({ tasks }) => {
  return (
    <Container sx={styleCollections} maxWidth='sm'>
      <Box>
        <Typography sx={styleCollectionsName}>Collections</Typography>
      </Box>
      <Grid container spacing={2}>
        {tasks.map((e: TasksProp) => (
          <CollectionsItem key={e.id} {...e} />
        ))}
      </Grid>
    </Container>
  )
}

export default Collections
