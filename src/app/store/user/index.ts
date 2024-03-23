import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '@/shared'
import type { IUserLoginParams } from './types'
import { http } from '@/app/config/axios'
import * as api from './api'
import toast from 'react-hot-toast'

interface IUserSliceState {
    user: IUser | null
    accessToken: string | null
    isAuth: boolean
    isLoading: boolean
    errorText: string
}

// interface IUserSliceReducers {
//     login(payload: { login: string, password: string, csrf: string }): Promise<number>
// }

const initialState: IUserSliceState = {
    user: null,
    accessToken: null,
    isAuth: false,
    isLoading: false,
    errorText: '',
}

export interface IUserSigninParams {
    login: string
    password: string
    csrf: string
}

export const signin = createAsyncThunk(
    'user/signin',
    async (payload: IUserSigninParams) => {
        const response = await http.post('user/login', payload)
        console.log(response)
        return response.data
    },
)

/**
 * логин с данными (login, pass)
 * выход из аккаунта
 * 
 * JWT
 */

type TUserSliceResponse = true | Record<string, string>

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

            return error
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer
