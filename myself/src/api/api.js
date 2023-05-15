import { createApi,  fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURL = "http://localhost:8081/"

export const yasamApi = createApi({
    reducerPath: "yasamApi",
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
      }),
    endpoints: (builder) => ({
        getUserById : builder.query({
            query: (id) => `users/${id}`
        }),
        createUser: builder.mutation({
            query: (body) => ({
              url:  'users',
              method: 'POST',
              body,
            }),
            invalidatesTags : [ 'users' ],
          }),
    }),
});

export const { useGetUsersQuery, useCreateUserMutation, useGetUserByIdQuery } = yasamApi




