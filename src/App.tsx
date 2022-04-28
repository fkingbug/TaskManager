import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import Header from './Header/Header'
import MainBar from './MainBar/MainBar'
import MyModal from './components/Modal/MyModal'
import SideBar from './SideBar/SideBar'

const App = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#17181f',
  }
  const contentStyle = {
    flex: 1,
    display: 'flex',
    boxShadow: '1px -1px 0px 0px rgb(15 14 52 / 60%)',
  }

  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box sx={style}>
      <CssBaseline />
      <Header handleOpen={handleOpen} />
      <Box sx={contentStyle}>
        <SideBar />
        <MainBar />
      </Box>
      <MyModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </Box>
  )
}

export default App
