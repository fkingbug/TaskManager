import React, { FC, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import AppBar from '@mui/material/AppBar'
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const [active, setActive] = useState(0)
  const marginFlex = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    color: 'gray',
    cursor: 'pointer',
  }
  const marginFlexACtive = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '30px',
    color: 'white',
    cursor: 'pointer',
  }
  const header = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  const addIcon = {
    width: '30px',
    height: '30px',
    bgcolor: 'pink',
    // color: '#fff',
  }
  const marginIconStyle = {
    marginRight: '15px',
  }
  const handleActive = (num: number) => setActive(num)
  return (
    <AppBar sx={header} position='static'>
      <Toolbar>
        <Link style={{ textDecoration: 'none' }} to='/dashboard'>
          <Box style={active === 0 ? marginFlexACtive : marginFlex} onClick={() => handleActive(0)}>
            <DashboardIcon />
            <Typography>Dashboard</Typography>
          </Box>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Box style={active === 1 ? marginFlexACtive : marginFlex} onClick={() => handleActive(1)}>
            <AutoAwesomeMotionIcon />
            <Typography>Collections</Typography>
          </Box>
        </Link>
      </Toolbar>
      <Toolbar>
        <IconButton sx={marginIconStyle} aria-label='Example'>
          <Avatar sx={addIcon} variant='rounded'>
            <AddIcon />
          </Avatar>
        </IconButton>
        <IconButton sx={marginIconStyle} aria-label='Example'>
          <NotificationsNoneIcon sx={{ color: '#fff' }} />
        </IconButton>
        <Avatar
          alt='Remy Sharp'
          src='https://cdn.discordapp.com/attachments/808074429447405612/968957322804203541/unknown.png'
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
