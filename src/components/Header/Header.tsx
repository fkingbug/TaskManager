import React, { FC, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import AppBar from '@mui/material/AppBar'
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface headerS {
  handleOpen: any
}
const Header: FC<headerS> = ({ handleOpen }) => {
  const [active, setActive] = useState(0)

  const handleActive = (num: number) => setActive(num)
  return (
    <AppBar sx={headerStyle} position='static'>
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
        <IconButton onClick={handleOpen} sx={marginIconStyle} aria-label='Example'>
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
