import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { TasksProp } from '../features/TasksProp'
import { SideBarItemProp } from '../features/SideBarItemProp'

export const taskAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://613e3b5094dbd600172abb2c.mockapi.io' }),
  tagTypes: ['Tasks'],
  endpoints: (build) => ({
    getAllTasks: build.query<TasksProp[], string>({
      query: () => ({
        url: '/todos',
        params: {},
      }),
      providesTags: (result) => ['Tasks'],
    }),
    createTasks: build.mutation<SideBarItemProp, SideBarItemProp>({
      query: (task) => ({
        url: '/todos',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTasks: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
})
