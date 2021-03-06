import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const styleProgres = {
  display: 'flex',
  height: ' 100%',
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}

const Propgres = () => {
  return (
    <Box sx={styleProgres}>
      <CircularProgress sx={{ color: '#23253' }} />
    </Box>
  )
}

export default Propgres
