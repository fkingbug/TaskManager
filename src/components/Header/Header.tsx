import React, { FC } from 'react'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import AppBar from '@mui/material/AppBar'
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { addIcon, headerStyle, marginFlex, marginIconStyle } from './Header.style'
import { headerRoute } from './Header.routes'

interface headerS {
  handleOpen: any
}
const Header: FC<headerS> = ({ handleOpen }) => {
  // const [active, setActive] = useState(0)

  // const handleActive = (num: number) => setActive(num)
  return (
    <AppBar sx={headerStyle} position='static'>
      <Toolbar>
        {headerRoute.map((routeItem) => (
          <Link key={`${routeItem.name}`} style={{ textDecoration: 'none' }} to=''>
            <Box style={marginFlex}>
              {routeItem.icon}
              <Typography>{routeItem.name}</Typography>
            </Box>
          </Link>
        ))}
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
          src='https://i.pinimg.com/736x/c2/5d/d9/c25dd985eb7205a20fa83c49691cbccc.jpg'
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
