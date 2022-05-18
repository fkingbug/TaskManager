import React, { FC } from 'react'
import { Avatar, Box, Drawer, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { taskSlice } from '../../store/reducers/taskSlice'
import { gitAPI } from '../../services/GitSerevise'

const DrawerInfo = () => {
  const { isDrawer } = useAppSelector((state: any) => state.taskReducer)
  const { data } = gitAPI.useGetGitInfoQuery('')
  const { drawerSwitch } = taskSlice.actions
  const dispatch = useAppDispatch()
  console.log(data)
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: '40px 0',
    backgroundColor: '#20212c',
    width: '300px',
    height: '100%',
  }
  const styleIcon = {
    width: '250px',
    height: '250px',
    marginBottom: '20px',
    boxShadow: ' 0px 0px 1px 3px rgb(116 142 163 / 60%)',
  }
  const styleText = {
    color: 'white',
    fontWeight: '700',
    fontSize: '25px',
  }
  return (
    <Drawer anchor='right' open={isDrawer} onClose={() => dispatch(drawerSwitch(false))}>
      {data && (
        <Box sx={style}>
          <Avatar sx={styleIcon} alt='taski' src={data.avatar_url} />
          <Typography sx={styleText}>{data.login}</Typography>
          <Typography sx={styleText}>{data.bio}</Typography>
        </Box>
      )}
    </Drawer>
  )
}

export default DrawerInfo
