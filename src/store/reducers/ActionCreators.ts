import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { SideBarItemProp } from '../../features/SideBarItemProp'

export const fetchTasks = createAsyncThunk('task/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<SideBarItemProp[]>(
      'https://613e3b5094dbd600172abb2c.mockapi.io/todos'
    )
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue('Не удалось загрузить таски')
  }
})
