import { isAxiosError } from 'axios'
import { http } from "@/app/config/axios";
import type { IUserLoginParams, IUserLoginSuccess, IUserLoginError } from "./types";

const USER_LOGIN = 'user/login'

/**
 * Метод должен вернуть успешный объект или массив ошибок
 * мы не должны обрабатывать 403, api error ...
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
