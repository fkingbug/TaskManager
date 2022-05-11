import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface tasksState {
  isModal: boolean
}

const initialState: tasksState = {
  isModal: false,
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    modalSwitch(state, action: PayloadAction<boolean>) {
      state.isModal = action.payload
    },
  },
})

export default taskSlice.reducer
