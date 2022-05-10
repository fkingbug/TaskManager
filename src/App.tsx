import { Box, CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Collections from './components/Collections/Collections'
import Header from './components/Header/Header'
import MainBar from './components/MainBar/MainBar'
import MyModal from './components/MyModal/MyModal'
import SideBar from './components/SideBar/SideBar'
import { taskAPI } from './services/TaskServise'

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
    maxHeight: 'calc(100vh - 64px)',
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { data: tasks } = taskAPI.useGetAllTasksQuery('')
  // console.log(tasks)
  return (
    <Box sx={style}>
      <CssBaseline />
      <Header handleOpen={handleOpen} />
      {/* <CircularProgress color="secondary" /> */}
      {tasks && (
        <Routes>
          <Route path='/' element={<Collections tasks={tasks} />} />
          <Route path='/task/:id' element={<MainBar tasks={tasks} />} />
          <Route path='/dashboard' element={<MainBar tasks={tasks} />} />
        </Routes>
        //
        //
        //   <Routes>
        //
        //   </Routes>
        // </Box>
      )}
      <MyModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
    </Box>
  )
}

export default App
