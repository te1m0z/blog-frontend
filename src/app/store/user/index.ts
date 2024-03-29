import { makeObservable, observable, action } from "mobx"
import type { IUser } from '@/shared'
import type { IUserLoginParams } from './types'
import * as api from './api'

class User {
    user: IUser | null = null
    accessToken: string | null = null
    isAuth: boolean = false

    constructor() {
        makeObservable(this, {
            user: observable,
            accessToken: observable,
            isAuth: action
        })
    }

    async login(payload: IUserLoginParams) {
        const { response, error } = await api.loginWithPassword(payload)

        if (response) {
            this.isAuth = true
            this.user = response
            
            return true
        }

        return error
    }
}
  