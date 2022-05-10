import React, { FC } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import CollectionsItem from '../CollectionsItem/CollectionsItem'

export interface CollectionsItemProp {
  idTask: string
  isComplete: boolean
  name: string
  color: string
  todos: any
}
export interface CollectionProp {
  tasks: CollectionsItemProp[]
}

const styleCollections = {
  flex: '1',
  display: 'flex',
  paddingTop: '30px',
  flexDirection: 'column',
}
const styleCollectionsName = {
  color: '#fff',
  fontWeight: '700',
  fontSize: ' 25px',
  marginBottom: '40px',
}
const styleCollectionitems = {
  // flex: '1',
  // background: 'red',
}
const Collections: FC<any> = ({ tasks }) => {
  return (
    <Container sx={styleCollections} maxWidth='sm'>
      <Box>
        <Typography sx={styleCollectionsName}>Collections</Typography>
      </Box>
      <Grid sx={styleCollectionitems} container spacing={2}>
        {tasks.map((e: any) => (
          <CollectionsItem {...e} />
        ))}
      </Grid>
    </Container>
  )
}

export default Collections
