import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '@/shared'
import type { IUserLoginParams } from './types'
import { http } from '@/app/config/axios'
import * as api from './api'

interface IUserSliceState {
    user: IUser | null
    accessToken: string | null
    isAuth: boolean
}

// interface IUserSliceReducers {
//     login(payload: { login: string, password: string, csrf: string }): Promise<number>
// }

const initialState: IUserSliceState = {
    user: null,
    accessToken: null,
    isAuth: false
}

export const loginWithPassword = createAsyncThunk(
    'user/loginWithPassword',
    async function(payload: IUserLoginParams) {
        const { response, error } = await api.loginWithPassword(payload)
    },
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: async (state, action: PayloadAction<IUserLoginParams>) => {
            const { response, error } = await api.loginWithPassword(action.payload)

            if (response) {
                state.isAuth = true
                state.user = response
            }

            // return error
        }
    }
})

// export const { login } = userSlice.actions

export default userSlice.reducer
