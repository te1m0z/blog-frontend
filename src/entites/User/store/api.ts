import { isAxiosError } from 'axios'
import { http } from "@/app/config/axios";
import type {
    IUserLoginParams,
    IUserLoginSuccess,
    IUserLoginError,
    IFetchCsrfTokenApiSuccess
} from "./types"

const USER_LOGIN = 'user/login'
const FETCH_CSRF = 'csrf'

/**
 * Вход в аккаунт с помощью логина и пароля
 * Функция должна вернуть успешный объект юзера или ошибку с полями
 */
export async function loginWithPassword(params: IUserLoginParams) {
    try {
        const response = await http.post<IUserLoginSuccess>(USER_LOGIN, params)
        return { response: response.data.data }
    } catch (err: unknown) {
        if (isAxiosError(err) && err.response) {
            const errData = err.response.data as IUserLoginError
            return { error: errData.errors }
        }
        throw err
    }
}

/**
 * Создание нового CSRF токена
 * Функция должна вернуть объект с токеном и датой его окончания
 */
export async function fetchCsrfToken() {
    try {
        const response = await http.post<IFetchCsrfTokenApiSuccess>(FETCH_CSRF)
        return { response: response.data.data }
    } catch (err: unknown) {
        if (isAxiosError(err) && err.response) {
            const errData = err.response.data
            return { error: errData.errors }
        }
        throw err
    }
}
