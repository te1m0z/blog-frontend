import { IUser } from "@/shared"
import { IBaseServerError, IBaseServerSuccess } from "@/shared/types/Http"

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
