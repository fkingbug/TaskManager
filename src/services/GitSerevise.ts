import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { gitProp } from '../features/GitProp'

export const gitAPI = createApi({
  reducerPath: 'gitAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users' }),
  endpoints: (build) => ({
    getGitInfo: build.query<gitProp, string>({
      query: () => ({
        url: '/fkingbug',
        params: {},
      }),
    }),
  }),
})
