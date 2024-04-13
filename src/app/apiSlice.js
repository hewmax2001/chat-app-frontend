import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../features/auth'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3003/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    console.log("Does every request first base through this?")

    if (result?.error?.originalStatus === 401) {
        // send refresh token
        const refreshResult = await baseQuery('/api/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ ...refreshResult.data, user}))
            return await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})