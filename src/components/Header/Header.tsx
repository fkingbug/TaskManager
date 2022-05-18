import React, { FC } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import AppBar from '@mui/material/AppBar'
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { addIcon, headerStyle, marginFlex, marginIconStyle } from './Header.style'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import { taskSlice } from '../../store/reducers/taskSlice'
import { useAppDispatch } from '../../hooks/redux'
import { gitAPI } from '../../services/GitSerevise'

const Header = () => {
  const { modalSwitch, drawerSwitch } = taskSlice.actions
  const dispatch = useAppDispatch()
  const handleOpen = () => dispatch(modalSwitch(true))
  const handleOpenDrower = () => dispatch(drawerSwitch(true))
  const { data } = gitAPI.useGetGitInfoQuery('')
  return (
    <AppBar sx={headerStyle} position='static'>
      <Toolbar>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Box style={marginFlex}>
            <AutoAwesomeMotionIcon />
            <Typography>Collections</Typography>
          </Box>
        </Link>
      </Toolbar>
      <Toolbar>
        <IconButton onClick={handleOpen} sx={marginIconStyle}>
          <Avatar sx={addIcon} variant='rounded'>
            <AddIcon />
          </Avatar>
        </IconButton>
        <IconButton sx={marginIconStyle} aria-label='Example'>
          <NotificationsNoneIcon sx={{ color: '#fff' }} />
        </IconButton>
        {data?.avatar_url ? (
          <Avatar
            sx={{ cursor: 'pointer' }}
            onClick={handleOpenDrower}
            alt='taski'
            src={data.avatar_url}
          />
        ) : (
          <Avatar onClick={handleOpenDrower} alt='taski'>
            F
          </Avatar>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
