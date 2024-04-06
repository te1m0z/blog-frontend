import { makeObservable, observable, action } from "mobx"
import type { IUser } from '@/shared'
import type { IUserLoginParams } from './types'
import * as api from './api'

type TUserPrivateFields = '_user' | '_isAuth' | '_accessToken'

export class User {
    private _user: IUser | null = null
    private _isAuth: boolean = false
    private _accessToken: string | null = null

    get user() {
        return this._user
    }

    get isAuth() {
        return this._isAuth
    }

    get accessToken() {
        return this._accessToken
    }

    constructor() {
        makeObservable<User, TUserPrivateFields>(this, {
            _user: observable,
            _isAuth: observable,
            _accessToken: observable,
            setUser: action,
            setIsAuth: action,
            login: action,
        })
    }

    setIsAuth(value: boolean) {
        this._isAuth = value
    }

    setUser(user: IUser | null) {
        this._user = user
    }

    async login(payload: IUserLoginParams) {
        const response = await api.loginWithPassword(payload)

        if (response) {
            this.setIsAuth(true);
            this.setUser(response);
            
            return true
        }

        return false
    }

    async fetchCsrfToken() {
        const { response } = await api.fetchCsrfToken()

        if (response) {
            return response.token
        }
    }
}
  