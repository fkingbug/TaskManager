import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { taskAPI } from '../services/TaskServise'
import useReucer from './reducers/userSlice'

const rootReducer = combineReducers({
  useReucer,
  [taskAPI.reducerPath]: taskAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
