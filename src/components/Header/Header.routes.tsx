import DashboardIcon from '@mui/icons-material/Dashboard'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'
import { HeaderProps } from '../../features/HeaderProps'
import React from 'react'

export const headerRoute: HeaderProps[] = [
  { name: 'Dashboard', link: '/dashboard', icon: <DashboardIcon /> },
  { name: 'Collections', link: '/', icon: <AutoAwesomeMotionIcon /> },
]
