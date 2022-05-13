import { Box, CssBaseline, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Collections from './components/Collections/Collections'
import DrawerInfo from './components/Drawer/Drawer'
import Header from './components/Header/Header'
import MainBar from './components/MainBar/MainBar'
import MyModal from './components/MyModal/MyModal'
import { taskAPI } from './services/TaskServise'
import { style } from './theme/App.style'

const App = () => {
  const { data: tasks } = taskAPI.useGetAllTasksQuery('')

  return (
    <Box sx={style}>
      <CssBaseline />
      <Header />
      {tasks ? (
        <Routes>
          <Route path='/' element={<Collections tasks={tasks} />} />
          <Route path='/task/:id' element={<MainBar tasks={tasks} />} />
        </Routes>
      ) : (
        <Typography>Загрузка</Typography>
      )}
      <MyModal />
      <DrawerInfo />
    </Box>
  )
}
export default App
