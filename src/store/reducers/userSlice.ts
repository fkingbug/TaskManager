import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SideBarItemProp } from '../../features/SideBarItemProp'

interface tasksState {
  users: SideBarItemProp[]
  isLoading: boolean
  error: string
}

const initialState: tasksState = {
  users: [],
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
})

export default userSlice.reducer
