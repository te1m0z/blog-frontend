import { makeObservable, observable, action } from "mobx"
import { appLocalStorage, type IUser } from '@/shared'
import type { IUserLoginParams } from './types'
import * as api from './api'

type TUserPrivateFields = '_user' | '_isAuth' | '_accessToken' | '_refreshToken'

export class User {
    private _user: IUser | null = null
    private _isAuth: boolean = false
    private _accessToken: string | null = null
    private _refreshToken: string | null = null

    get user() {
        return this._user
    }

    get isAuth() {
        return this._isAuth
    }

    get accessToken() {
        return this._accessToken
    }

    get refreshToken() {
        return this._refreshToken
    }

    constructor() {
        makeObservable<User, TUserPrivateFields>(this, {
            _user: observable,
            _isAuth: observable,
            _accessToken: observable,
            _refreshToken: observable,
            setUser: action,
            setIsAuth: action,
            login: action,
        })

        const jwt = appLocalStorage.get('jwt')

        if (jwt && jwt.access_token && jwt.refresh_token) {
            this._accessToken = jwt.access_token
            this._refreshToken = jwt.refresh_token
        }
    }

    setIsAuth(value: boolean) {
        this._isAuth = value
    }

    setUser(user: IUser | null) {
        this._user = user
    }

    setTokens(access_token: string, refresh_token: string) {
        this._accessToken = access_token
        this._accessToken = refresh_token
        appLocalStorage.set('jwt', { access_token, refresh_token })
    }

    async fetchUserData() {
        const { response } = await api.fetchUserData()

        if (response) {
            this.setIsAuth(true);
            this.setUser({
                id: response.id,
                login: response.attributes.login
            })

            return true
        }

        return false
    }

    async login(payload: IUserLoginParams) {
        const response = await api.loginWithPassword(payload)

        if (response) {
            this.setIsAuth(true);
            this.setUser({
                id: response.id,
                login: response.login
            })
            this.setTokens(response.access_token, response.refresh_token)
            
            return true
        }

        return false
    }

    async fetchCsrfToken() {
        const { response } = await api.fetchCsrfToken()

        console.log(response)
        if (response) {
            return response
        }
    }
}
  