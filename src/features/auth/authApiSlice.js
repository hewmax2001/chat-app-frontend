import { apiSlice } from "../../app/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
                body: {}
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = authApiSlice