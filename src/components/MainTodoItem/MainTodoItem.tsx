import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
const MainTodoItem = () => {
  const { id, color, name, icon } = useParams()

  return (
    <>
      <Typography>{id}</Typography>
      <Typography>{color}</Typography>
      <Typography>{name}</Typography>
      <Typography>{icon}</Typography>
    </>
  )
}

export default MainTodoItem
