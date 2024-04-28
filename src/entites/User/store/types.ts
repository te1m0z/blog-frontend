import type { IUser } from "../types/User"
import type { ICsrfToken } from "../types/Csrf"
import { IBaseServerError, IBaseServerSuccess } from "@/shared/types/Http"

type TUserData = {
    type: 'users'
    id: number
    attributes: Record<string, string>
}

export interface IUserDataSuccess extends IBaseServerSuccess<TUserData> {}

export interface IUserLoginParams {
    login: string
    password: string
    csrf: string
}

export interface IUserLoginSuccess extends IBaseServerSuccess<IUser> {}

export interface IUserLoginError extends IBaseServerError {
    errors: {
        login: string
        password: string
    }
}

export interface IFetchCsrfTokenApiSuccess extends IBaseServerSuccess<ICsrfToken> {}
