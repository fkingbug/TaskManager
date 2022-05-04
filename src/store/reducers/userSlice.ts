import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SideBarItemProp } from '../../features/SideBarItemProp'
import { fetchTasks } from './ActionCreators'

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
  extraReducers: {
    [fetchTasks.fulfilled.type]: (state, action: PayloadAction<SideBarItemProp[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    [fetchTasks.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchTasks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default userSlice.reducer
