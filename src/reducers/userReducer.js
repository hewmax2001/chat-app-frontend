import { createSlice } from "@reduxjs/toolkit"
import loginServices from '../services/login'

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        }
    }
})

export const loginUser = (username, password) => {
    return async dispatch => {
        const response = await loginServices.login(username, password)
        dispatch(setUser(response))
    }
}

export default userSlice.reducer