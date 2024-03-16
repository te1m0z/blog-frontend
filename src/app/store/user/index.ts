import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '@/shared'
import { http } from '@/app/config/axios'

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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        async login(state) {
            const response = http.post('user/login')
            return 123
        }
    }
})

export const { login } = userSlice.actions

export default userSlice.reducer
